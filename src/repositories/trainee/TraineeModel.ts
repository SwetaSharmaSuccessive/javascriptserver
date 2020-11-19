import * as mongoose from 'mongoose';

import TraineeSchema from './TraineeSchema';
import ITraineeModel from './ITraineeModel';

export const userSchema = new TraineeSchema({
    collections: 'user',
});

export const traineeModel: mongoose.Model<ITraineeModel> = mongoose.model<ITraineeModel> (
    'User',
    userSchema,
    'User',
    true,
);