const { Schema } = require('../schema');

const CreateResources = {
    type: 'mutation',
    name: 'CreateResources',
    spec: {
        service: 'mongodb',
        type: 'InsertOne',
        arguments: Schema,
        limitations: {},
        data: {},
        mutation: {
            document: '$data.arguments',
            options: {},
        },
        result: {
            value: '$data',
        },
        document: '$data',
    },
};

module.exports = CreateResources;
