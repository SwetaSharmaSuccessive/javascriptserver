import * as mongoose from 'mongoose';
import  VersionableSchema  from '../versionable/VersionableSchema';

export default class TraineeSchema  extends VersionableSchema {
    constructor(collections: any) {
        const baseSchema = Object.assign({
            id: String,
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String,
        });
        super(baseSchema, collections);

    }
}
