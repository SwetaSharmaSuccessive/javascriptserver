import * as jwt from 'jsonwebtoken';
import hasPermissions from '../permissions';
export default(module, permissionType) => (req, res, next) => {
    try {
        console.log('config is', module, permissionType);
        const head = 'authorization';
        console.log('header is', req.headers[head]);
        const token = req.headers[head];
        const decodeUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log('User', decodeUser);
        if (hasPermissions(module, decodeUser.role, permissionType)) {
            next();
        }
        else {
            next({
                error: 403,
                message: 'Unauthorized'
            });
        }
    } catch ( err ) {
        next({
            error: 'Unauthorized',
            status: 403
        });
    }
};