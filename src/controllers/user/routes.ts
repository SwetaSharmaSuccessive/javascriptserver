import { Router } from 'express';
import UserController from './controller';

import validationHandler from '../../libs/validationHandler';

import validation from './validation';

const UserRouter = Router();

UserRouter.route('/')
    .get(validationHandler(validation.get), UserController.get)
    .post(validationHandler(validation.create), UserController.create)
    .put(validationHandler(validation.update), UserController.update)
    .delete(validationHandler(validation.delete), UserController.update);


export default UserRouter;