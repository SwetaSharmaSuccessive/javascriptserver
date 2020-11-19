
import * as mongoose from 'mongoose';
import { traineeModel } from './TraineeModel';
import ITraineeModel from './ITraineeModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository<ITraineeModel, mongoose.Model<ITraineeModel>> {

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(traineeModel);
    }
    public static findOne(query): mongoose.DocumentQuery<ITraineeModel, ITraineeModel, {}> {
        return traineeModel.findOne(query).lean();
    }

    public create(data: any): Promise<ITraineeModel> {
        return super.userCreate(data);
    }

    public count() {
        return traineeModel.countDocuments();
    }

}