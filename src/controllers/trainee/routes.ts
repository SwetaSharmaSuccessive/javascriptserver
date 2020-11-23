import {  Router  } from 'express';
import traineeController  from '../../controllers/user/controller';
import {  validationHandler }  from '../../libs/validationHandler';
import validation from './validation';
import  authMiddleware  from  '../../libs/routes/authMiddleWare';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import  config  from '../trainee/validation';


const traineeRouter = Router();
traineeRouter.route('/')
.get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), traineeController.get)
.post(authMiddleWare('getUsers', 'read'), validationHandler(config.create), traineeController.create)
.put(authMiddleWare('getUsers', 'read'), validationHandler(config.update), traineeController.update)
.delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), traineeController.delete);
traineeRouter.route('/:id')
.delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), traineeController.delete);



export default traineeRouter;