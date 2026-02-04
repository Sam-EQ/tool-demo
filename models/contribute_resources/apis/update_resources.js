const { UpdateSchema } = require('../schema');

const UpdateResources = {
    type: 'mutation',
    name: 'UpdateResources',
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
                $set: '$data.arguments',
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

module.exports = UpdateResources;
