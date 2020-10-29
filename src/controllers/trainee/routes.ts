import * as express from 'express';
// import { Router } from 'express';
import traineeController from './controller';
const traineeRouter =  express.Router();

traineeRouter.route('/')
    .get(traineeController.get)
    .post(traineeController.create)
    .put(traineeController.update)
    .delete(traineeController.Delete);

export default traineeRouter;