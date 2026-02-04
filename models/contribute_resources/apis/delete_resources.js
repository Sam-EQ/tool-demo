const { UpdateSchema } = require('../schema');

const DeleteResources = {
    type: 'mutation',
    name: 'DeleteResources',
    spec: {
        service: 'mongodb',
        type: 'UpdateOne',
        arguments: UpdateSchema(['_id'], ['_id']),
        limitations: {},
        data: {},
        mutation: {
            filter: {
                _id: '$data.arguments._id',
            },
            update: {
                $set: {
                    isDeleted: true,
                    updatedAt: '$data.arguments.updatedAt',
                    updatedById: '$data.arguments.updatedById',
                },
            },
            options: {
                returnDocument: 'after',
            },
        },
        result: {
            value: '$data',
        },
        document: '$data',
    },
};

module.exports = DeleteResources;
