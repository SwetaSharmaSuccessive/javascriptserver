import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import  configuration  from '../../config/configuration';
import { payload } from '../../libs/routes/constant';
import UserRepository from '../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';

class UserController {
    static instance: UserController;
    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();

    }
    public get =  async (req: Request, res: Response, next: NextFunction) => {
        try {
            const extractedData = await this.userRepository.get(req.body, {}, {});
            res.status(200).send({
                message: 'User fetched successfully',
                data: extractedData,
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.userRepository.create(req.body);
            res.status(200).send({
                message: 'User created successfully',
                data: result,
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public update = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.userRepository.update(req.body);
            res.status(200).send({
                message: 'User updated successfully',
                data: result
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public delete = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result =   await this.userRepository.delete(req.params.id);
            res.status(200).send({
                message: 'User deleted successfully',
                data:
                    {

                    },
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const secretKey = configuration.secret;
            console.log(secretKey);
            payload.email = req.body.email;
            console.log(payload.email);
            const data = await UserRepository.findOne({ email: req.body.email});
            console.log(data.password);
            console.log(req.body.password);
                    if (data === null) {
                        next({
                            message: 'Email not found',
                            error: 'Unauthorized Access',
                            status: 403
                        });
                    }
                        const matchPassword = await bcrypt.compareSync(req.body.password, data.password);
                        console.log(matchPassword);
                        if (matchPassword) {
                            const token = jwt.sign(payload, secretKey);
                            res.status(200).send({
                                message: 'token created successfully',
                                data: {
                                    generated_token: token
                                },
                                status: 'success'
                            });
                        }
                        else {
                        next({
                            error: 'token not found',
                            status: 400
                        });
                    }

        }
        catch (err) {
            return next({
                error: 'bad request',
                message: err,
                status: 400
            });
        }
    }

    async me(req, res, next) {
        try {
            res.send({
                data: (req.user),
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

export default UserController.getInstance();