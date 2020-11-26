import {  Router  } from 'express';
import userController  from '../../controllers/user/controller';
import {  validationHandler }  from '../../libs/validationHandler';
import validation from './validation';
import  authMiddleware  from  '../../libs/routes/authMiddleWare';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const userRouter = Router();
userRouter.route('/');
    userRouter.route('/me')
    .get(authMiddleWare ('getUsers', 'read'), validationHandler(validation.get), userController.me);
    userRouter.route('/login')
    .post( validationHandler ( validation.login ), userController.login );


export default userRouter;