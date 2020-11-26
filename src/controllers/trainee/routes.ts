import {  Router  } from 'express';
import traineeController  from '../../controllers/user/controller';
import {  validationHandler }  from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';


const traineeRouter = Router();
traineeRouter.route('/')
.get(authMiddleWare('getUsers', 'all'), validationHandler(validation.get), traineeController.get)
.post(authMiddleWare('getUsers', 'write'), validationHandler(validation.create), traineeController.create)
.put(authMiddleWare('getUsers', 'all'), validationHandler(validation.update), traineeController.update)
.delete(authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), traineeController.delete);
traineeRouter.route('/:id')
.delete(authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), traineeController.delete);



export default traineeRouter;