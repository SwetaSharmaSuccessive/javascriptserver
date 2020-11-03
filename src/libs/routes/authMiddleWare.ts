import *as jwt from 'jsonwebtoken';

export default(module, permissionType) => (req, res, next) => {
    try {
        console.log('config is', module, permissionType);
        console.log('header is', req.headers['authorization']);
        const token = req.headers['authorization'];
        const decodeUser = jwt.verify(token, ' qwertyuiopasdfghjklzxcvbnm123456');
        console.log('User', decodeUser);
        next();
    } catch ( err ) {
        next({
            error: 'Unauthorized',
            status: 403
        });
    }
};