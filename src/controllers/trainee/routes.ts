
import { Router } from 'express';
import traineeController from './controller';
import validationHandler from '../../libs/validationHandler';
const traineeRouter =  Router();

traineeRouter.route('/')
    .get(traineeController.get)
    .post(traineeController.create)
    .put(traineeController.update)
    .delete(traineeController.Delete);

export default traineeRouter;