import { Request, Response, NextFunction } from 'express';
import  configuration  from '../../config/configuration';
import { payload } from '../../libs/routes/constant';
import * as jwt from 'jsonwebtoken';
import TraineeRepository from '../../repositories/trainee/TraineeRepository';
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
            const extractedData = await this.traineeRepository.get(req.body, {}, {});
            res.status(200).send({
                message: 'Trainee fetched successfully',
                data: extractedData,
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.traineeRepository.create(req.body);
            res.status(200).send({
                message: 'Trainee created successfully',
                data: result,
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public update = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.traineeRepository.update(req.body);
            res.status(200).send({
                message: 'Trainee updated successfully',
                data: result
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public delete = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result =   await this.traineeRepository.delete(req.params.id);
            res.status(200).send({
                message: 'Trainee deleted successfully',
                data: {},
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    login(req: Request, res: Response, next: NextFunction) {
        try {
            const secretKey = configuration.secret;
            payload.email = req.body.email;
            payload.password = req.body.password;
            this.traineeRepository.findOne({ email: req.body.email, passsword: req.body.passsword })
                .then((data) => {
                    if (data === null) {
                        next({
                            message: 'Trainee not found',
                            error: 'Unauthorized Access',
                            status: 403
                        });
                    }
                    else {
                        const token = jwt.sign(payload, secretKey);
                        res.status(200).send({
                            message: 'token created successfully',
                            data: {
                                generated_token: token
                            },
                            status: 'success'
                        });
                    }
                })
                .catch((err) => {
                    console.log('data not found', err);
                });

        }
        catch (err) {
            return next({
                error: 'bad request',
                message: err,
                status: 400
            });
        }
    }

}
export default TraineeController.getInstance();