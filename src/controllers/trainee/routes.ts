import { Router } from 'express';
import traineeController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes';
const traineeRouter =  Router();

traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(validation.get), traineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(validation.create), traineeController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(validation.update), traineeController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), traineeController.Delete);
    traineeRouter.route('/:id')
    .delete(validationHandler(validation.delete), traineeController.Delete);

export default traineeRouter;