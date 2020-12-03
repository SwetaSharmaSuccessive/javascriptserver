import { Request, Response, NextFunction } from 'express';
import  configuration  from '../../config/configuration';
import { payload } from '../../libs/routes/constant';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import TraineeRepository from '../../repositories/trainee/TraineeRepository';
import IRequest from '../../libs/routes/IRequest';
import ITrainee from '../../entity/ITrainee';

class TraineeController {
    private traineeRepository: TraineeRepository;
    constructor() {
        this.traineeRepository = new TraineeRepository();

    }
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    public get =  async (req: Request, res: Response, next: NextFunction) => {
        try {
            function escapeRegExp(text) {
                return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
            }
            const {skip, limit, sort } = req.query;
            if (req.query.search !== undefined) {
                const regex = new RegExp(escapeRegExp(req.query.search), 'gi');
                const extractedData: Promise <ITrainee[]> = this.traineeRepository.get({email: regex} || {name: regex}, {},
                    {
                        limit : Number(limit),
                        skip : Number(skip),
                        sort: {[String(sort)]:  req.query.sortedBy},
                        collation: ({locale: 'en'})
                    });
                    const totalCount: number = await this.traineeRepository.count(req.body);
                    const [ extracted] = await Promise.all([extractedData]);
                    const countUser = extracted.length;
                    res.status(200).send({
                        message: 'trainee fetched successfully',
                        TotalCount: totalCount,
                        CountUser: countUser,
                        data: extractedData,
                        status: 'success',
                    });
                }
                else {
            const extractedData: Promise <ITrainee[]> = this.traineeRepository.get(req.body, {}, {
                limit : Number(limit),
                skip : Number(skip),
                sort: {[String(sort)]:  req.query.sortedBy},
                collation: ({locale: 'en'})
            });
            const totalCount: number = await this.traineeRepository.count(req.body);
            const [extracted] = await Promise.all([ extractedData]);
            const countUser = extracted.length;
            res.status(200).send({
                message: 'Trainee Fetched Successfully',
                TotalCount: totalCount,
                CountUser: countUser,
                data: extractedData,
                status: 'success',
            });
        }
        } catch (err) {
            console.log('error is ', err);
        }

    }
    public create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const rawPassword = req.body.password;
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(rawPassword, salt);
            req.body.password = hashedPassword;
            const result: ITrainee = await this.traineeRepository.create(req.body);
            res.status(200).send({
                message: 'Trainee Created Successfully',
                data: result,
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public update = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const resultData = req.body;
            if ('password' in resultData) {
                const rawPassword = resultData.password;
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(rawPassword, salt);
                resultData.password = hashedPassword;
            }
            const result = await this.traineeRepository.update(req.body);
            res.status(200).send({
                message: 'Trainee Updated Successfully',
                data: result
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public delete = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result: ITrainee =   await this.traineeRepository.delete(req.params.id);
            res.status(200).send({
                message: 'Trainee Deleted Successfully',
                data: {},
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const secretKey = configuration.secret;
            const { email, password} = req.body;
            payload.password = password;
            payload.email = email;
            const result: ITrainee = await TraineeRepository.findOne({ email});
            if (!result) {
                next({
                    message: 'Email not Registered!',
                    error: 'Unauthorized Access',
                    status: 403
                });
            }
            const matchPassword = await bcrypt.compareSync(payload.password, result.password);
            if (matchPassword) {
                const token = jwt.sign(payload, secretKey, {expiresIn: '15m'});
                return res.status(200).send({
                    message: 'Authorization Token',
                    data: {
                        generated_token: token
                    },
                    status: 'OK'
                });
            }
            next({
                error: 'Token Not Found',
                status: 400,
                message: 'Error'
            });

        }
        catch (err) {
            return next({
                error: 'Bad Request',
                message: err,
                status: 400
            });
        }
    }
    async me(req: IRequest, res: Response, next: NextFunction) {
        try {
            res.send({
                data: (req.user),
            });
        }
        catch (err) {
            return next({
                error: 'Bad Request',
                message: err,
                status: 400
            });
        }
    }

}

export default TraineeController.getInstance();