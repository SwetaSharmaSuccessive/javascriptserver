import * as mongoose from 'mongoose';

export default class VersionalSchema extends mongoose.Schema {

    constructor(options: any, collections: any) {
        const versionedOptions = Object.assign({
            ...options,
            createdAt: {
                default: Date.now,
                required: true,
                type: Date
            },
            deletedAt: {
                default: undefined,
                required: false,
                type: Date
            },
            originalId: {
                required: true,
                type: String,
            },
            updatedAt: {
                required: false,
                default: undefined,
                type: Date
            }
        }, options);
        super(versionedOptions, collections);
    }
}