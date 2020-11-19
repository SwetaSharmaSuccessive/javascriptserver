import * as mongoose from 'mongoose';

export default interface IVersionable extends mongoose.Document {
    deletedAt: Date;
    updatedAt: Date;
    createdAt: Date;
    originalId: string;
}