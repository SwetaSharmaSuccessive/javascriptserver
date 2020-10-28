import { json } from 'body-parser';
import { Request, Response, NextFunction } from 'express';
export default(err, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) { return next(err); }
    const { message, status, error } = err;
    const result = {
        error: error || 'undefined',
        status: status || 500,
        message:  message || 'Error',
        timestamp: new Date()
    };
    res.status(result.status).json(result);

};