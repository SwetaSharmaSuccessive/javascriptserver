import * as mongoose from 'mongoose';

export default interface IUSerModel extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;

}