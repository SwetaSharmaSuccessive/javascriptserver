
import { Router } from 'express';
import traineeController from './controller';
const traineeRouter =  Router();

traineeRouter.route('/')
    .get(traineeController.get)
    .post(traineeController.create)
    .put(traineeController.update)
    .delete(traineeController.Delete);

export default traineeRouter;