
import {  Router  } from 'express';
import userController  from '../../controllers/user/controller';
import {  validationHandler }  from '../../libs/validationHandler';
import validation from './validation';
import  authMiddleware  from  '../../libs/routes/authMiddleWare';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import config from './validation';

const userRouter = Router();
userRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), userController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), userController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), userController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), userController.delete);
    userRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), userController.delete);
    userRouter.route('/me')
    .get(authMiddleWare ('getUsers', 'all'), validationHandler(config.get) , userController.me);

    userRouter.route('/login')
    .post( validationHandler ( config.login ), userController.login );


export default userRouter;
