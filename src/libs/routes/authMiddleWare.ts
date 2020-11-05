import * as jwt from 'jsonwebtoken';
import hasPermissions from '../permissions';
import configuration from '../../config/configuration';
export default (module, permissionType) => (req, res, next) => {
    const secretKey = configuration.secret;
    const head = 'authorization';
    const token = req.headers[head];
    let user;
    if (!token) {
        next({
            message: 'Token not found',
            error: 'Authentication failed',
            status: 403
        });
    }
    try {
        user = jwt.verify(token, secretKey);
        console.log('User', user);
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