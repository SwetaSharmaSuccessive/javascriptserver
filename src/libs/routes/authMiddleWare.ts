import * as jwt from 'jsonwebtoken';
import hasPermissions from '../permissions';
import configuration from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';

export default (module, permissionType) =>  async (req, res, next) => {
    const secretKey = configuration.secret;
    const head = 'authorization';
    const token = req.headers[head];
    let dbUser;
    if (!token) {
        return next({
            message: 'Token not found',
            error: 'Authentication failed',
            status: 403
        });
    }
    try {
        const userData = jwt.verify(token, secretKey);
        console.log('user: ', userData);
        dbUser =  await UserRepository.findOne({email: userData.email});
        if (!dbUser) {
            return next({
                error: 'Unauthorized',
                message: 'permission Denied',
                status: 403
            });
        }
        req.user = dbUser;
        if (!hasPermissions(module, dbUser.role, permissionType)) {
            next({
                message: 'Permission denied',
                error: 'Unauthorized Access',
                status: 403
            });
        }
        next();
    } catch (err) {
        next({
            message: 'User is unauthorized',
            error: 'Unauthorized Access',
            status: 403
        });
    }

};