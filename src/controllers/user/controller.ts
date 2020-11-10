import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import  UserRepository  from '../../repositories/user/UserRepository';
import configuration from '../../config/configuration';
import { payload } from '../../libs/routes/constant';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    get(req, res, next) {
        try {
            res.send({
                message: 'User fetched successfully',
                data: [{
                    data: req.user,
                    name: 'Trainee',
                    address: 'Noida'
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    create(req, res, next) {
        try {
            res.send({
                message: 'User created successfully',
                data: [{
                    name: 'Trainee1',
                    address: 'Noida'
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    update(req, res, next) {
        try {
            res.send({
                message: 'User updated successfully',
                data: [{
                    name: 'Trainee2',
                    address: 'Noida'
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete(req, res, next) {
        try {
            res.send({
                message: 'User deleted successfully',
                data: [{
                    name: 'Trainee3',
                    address: 'Noida'
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    login(req: Request, res: Response, next: NextFunction) {
        try {
            const secretKey = configuration.secret;
            payload.email = req.body.email;
            payload.password = req.body.password;
            UserRepository.findOne({ email: req.body.email, passsword: req.body.passsword })
                .then((data) => {
                    if (data === null) {
                        next({
                            message: 'user not found',
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
export default UserController.getInstance();