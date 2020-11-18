import { Request, Response, NextFunction } from 'express';

class TraineeController {

    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    get(req: Request, res: Response, next: NextFunction) {
        console.log('Inside get request for trainee');
       try {
            res.status(200).send({
                message: 'Trainees fetched successfully',
                data: [
                    {
                        name: 'trainee1',
                        address: 'Noida'
                    }
                ],
                status: 'success'
            });
        }
          catch ( err ) {
            // TODO: will ship below logic in next assignment

            return next({
                error: 'bad request',
                message: err,
                status: 400
            });

         }
    }
    create(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).send({
                message: 'trainees created successfully',
                data: {
                    name: 'trainee1',
                    address: 'noida'
                },
                status: 'success'
            });
        } catch (err) {
            // TODO: will ship below logic in next assignment

            return next({
                error: 'bad request',
                message: err,
                status: 400
            });
            }
        }
    update(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).send({
                message: 'trainees update successfully',
                data: {
                    name: 'trainee1',
                    address: 'noida'
                },
                status: 'success'
            });
        } catch (err) {
            // TODO: will ship below logic in next assignment
            return next({
                error: 'bad request',
                message: err,
                status: 400
            });
        }
    }
    Delete(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(200).send({
                message: 'trainees deleted successfully',
                data: {},
                status: 'success'
            });
        } catch (err) {
            // TODO: will ship below logic in next assignment
            return next({
                error: 'bad request',
                message: err,
                status: 400
            });
        }
    }

}
export default TraineeController.getInstance();