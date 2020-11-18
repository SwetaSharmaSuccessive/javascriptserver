import * as jwt from 'jsonwebtoken';
import hasPermissions from '../permissions';
import configuration from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';
export default (module, permissionType) =>  (req, res, next) => {
    const secretKey = configuration.secret;
    const head = 'authorization';
    const token = req.headers[head];
    let dbUser;
    if (!token) {
        next({
            message: 'Token not found',
            error: 'Authentication failed',
            status: 403
        });
    }
    try {
        const user = jwt.verify(token, secretKey);
        console.log('user: ', user);
        dbUser =  UserRepository.findOne({originalId: user.id});
        if (!dbUser) {
            next({
                error: 'Unauthorized',
                message: 'permission Denied',
                status: 403
            });
        }
        req.user = user;
        if (!hasPermissions(module, user.role, permissionType)) {
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