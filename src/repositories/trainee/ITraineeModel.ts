import * as mongoose from 'mongoose';

export default interface ITraineeModel extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;

}