import { Router } from 'express';
import UserController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes';
import { permissions } from '../../libs/routes/constant';
import config from './validation';

const router = Router();

router.route('/')
    .get(validationHandler(validation.get), UserController.get)
    .post(validationHandler(validation.create), UserController.create)
    .put(validationHandler(validation.update), UserController.update)
    .delete(validationHandler(validation.delete), UserController.update);

router.route('/me')
    .post(authMiddleWare (permissions.getUsers, 'all'), UserController.me);

router.route('/login')
    .post( validationHandler ( config.login ) , UserController.login );


export default router;