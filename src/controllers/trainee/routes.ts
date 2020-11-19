import {  Router  } from 'express';
import traineeController  from '../../controllers/user/controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import  authMiddleware  from  '../../libs/routes/authMiddleWare';
import authMiddleWare from '../../libs/routes/authMiddleWare';


const traineeRouter = Router();
traineeRouter.route('/')
    .get(traineeController.get)
    .post(traineeController.create)
    .put( traineeController.update);
    traineeRouter.route('/:id')
    .delete(validationHandler(validation.delete), traineeController.delete);
    traineeRouter.route('/me')
    .get(authMiddleWare ('getUsers', 'all'), traineeController.get);

    traineeRouter.route('/login')
    .post( validationHandler ( validation. login) , traineeController.login );


export default traineeRouter;