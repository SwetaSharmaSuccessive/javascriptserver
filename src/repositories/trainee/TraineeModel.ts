import * as mongoose from 'mongoose';

import TraineeSchema from './TraineeSchema';
import ITraineeModel from './ITraineeModel';

export const traineeSchema = new TraineeSchema({
    collections: 'Trainee',
});

export const TraineeModel: mongoose.Model<ITraineeModel> = mongoose.model<ITraineeModel> (
    'Trainee',
    traineeSchema,
    'Trainee',
    true,
);