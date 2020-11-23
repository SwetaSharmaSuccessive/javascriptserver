
import {  Router  } from 'express';
import userController  from '../../controllers/user/controller';
import {  validationHandler }  from '../../libs/validationHandler';
import validation from './validation';
import  authMiddleware  from  '../../libs/routes/authMiddleWare';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import config from './validation';

const userRouter = Router();
userRouter.route('/');
    userRouter.route('/me')
    .get(authMiddleWare ('getUsers', 'all'), validationHandler(config.get) , userController.me);

    userRouter.route('/login')
    .post( validationHandler ( config.login ), userController.login );


export default userRouter;
