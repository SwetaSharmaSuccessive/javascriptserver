import {  Router  } from 'express';
import traineeController  from '../../controllers/trainee/controller';
import {  validationHandler }  from '../../libs/validationHandler';
import validation from './validation';
import  authMiddleware  from  '../../libs/routes/authMiddleWare';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import  config  from '../trainee/validation';


const traineeRouter = Router();
traineeRouter.route('/')
.get(validationHandler(config.get), traineeController.getAll)
.post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), traineeController.create)
.put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), traineeController.update)
.delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), traineeController.delete);
traineeRouter.route('/:id')
.delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.delete), traineeController.delete);



export default traineeRouter;