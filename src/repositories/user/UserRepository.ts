
import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import * as bcrypt from 'bcrypt';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(userModel);
    }
    public static findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return userModel.findOne(query).lean();
    }

    public create(data: any): Promise<IUserModel> {
        // const rawPassword = data.password;
        // const saltRounds = 10;
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hashedPassword = bcrypt.hashSync(rawPassword, salt);
        // data.password = hashedPassword;
        // console.log('data password: ', data.password);
        return super.create(data);
    }
    public delete(id: string): Promise<IUserModel> {
        return super.delete(id);
    }
    public update(data: any): Promise<IUserModel> {
        if ('password' in data) {
            const rawPassword = data.password;
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(rawPassword, salt);
            data.password = hashedPassword;
        }
        return super.update(data);
    }
    public async get(query: any, projection: any, options: any): Promise<IUserModel[]> {
        return super.get(query, projection, options);

    }
    public count() {
        return userModel.countDocuments();
    }

}