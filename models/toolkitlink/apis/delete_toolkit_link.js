const Schema = require('../schema');

const DeleteToolkitLink = {
    type: 'mutation',
    name: 'DeleteToolkitLink',
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

module.exports = DeleteToolkitLink;
