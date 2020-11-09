import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
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
            console.log('Inside get method of trainee controller');
            res.send({
                message: 'User fetched successfully',
                data: [{
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
            console.log('Inside post method of trainee controller');
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
            console.log('Inside put method of trainee controller');
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
            console.log('Inside delete method of trainee controller');
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
    login( req: Request, res: Response, next: NextFunction ) {
        try {
            const { email, password } = req.body;
            userModel.findOne ( { email: req.body.email }, (err, result ) => {
                if ( result ) {
                    if ( password === result.password) {
                        const token = jwt.sign( {
                            result
                        }, 'secret');
                        res.send({
                            data: token,
                            message: 'Login Successful',
                            status: 200
                        });
                    }
                    else {
                        res.send({
                            message: 'Incorrect Password',
                            status: 400
                        });
                    }
                }
                else {
                    res.send({
                        message: 'Email is not Registered',
                        status: 404
                    });
                }
            });
        }
        catch ( err ) {
            res.send(err);
        }
    }
    me(req: Request, res: Response, next: NextFunction) {
        const data = req.userData;
        res.json({
            data
        });
    }
}
export default UserController.getInstance();