
import * as express from 'express';
import UserController from './controller';
import { Router } from 'express';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import config from './validation';
const Router = express.Router();

Router.get('/get', authMiddleWare('getUsers', 'read'), validationHandler(validation.get), UserController.get);
Router.post('/create', authMiddleWare('getUsers', 'all'), validationHandler(validation.create), UserController.create);
Router.put('/update', authMiddleWare('getUsers', 'write'), validationHandler(validation.update), UserController.update);
Router.delete('/:id', authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), UserController.delete);
Router.post('/login', validationHandler(validation.login), UserController.login);
Router.get('/me', authMiddleWare('getUsers', 'all'), UserController.me);



export default Router;