const Schema = require('../schema');

const UpdateToolkitLink = {
    type: 'mutation',
    name: 'UpdateToolkitLink',
    spec: {
        service: 'mongodb',
        type: 'UpdateOne',
        arguments: Schema('update', ['_id']),
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

module.exports = UpdateToolkitLink;
