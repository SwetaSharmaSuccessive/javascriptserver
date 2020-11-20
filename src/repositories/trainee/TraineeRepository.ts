import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import { TraineeModel } from './TraineeModel';
import ITraineeModel from './ITraineeModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class TraineeRepository extends VersionableRepository<ITraineeModel, mongoose.Model<ITraineeModel>> {

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(TraineeModel);
    }
    public static findOne(query): mongoose.DocumentQuery<ITraineeModel, ITraineeModel, {}> {
        return TraineeModel.findOne(query).lean();
    }

    public create(data: any): Promise<ITraineeModel> {
        const rawPassword = data.password;
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(rawPassword, salt);
        data.password = hashedPassword;
        console.log('data password: ', data.password);
        return super.create(data);
    }
    public delete(id: string): Promise<ITraineeModel> {
        return super.delete(id);
    }
    public update(data: any): Promise<ITraineeModel> {
        if ('password' in data) {
            const rawPassword = data.password;
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(rawPassword, salt);
            data.password = hashedPassword;
        }
        return super.update(data);
    }
    public async get(query: any, projection: any, options: any): Promise<ITraineeModel[]> {
        return super.get(query, projection, options);

    }
    public count(query: any) {
        return super.count(query);
    }

}