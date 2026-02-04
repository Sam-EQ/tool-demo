const Schema = require('../schema');

const CreateToolkitLink = {
    type: 'mutation',
    name: 'CreateToolkitLink',
    spec: {
        service: 'mongodb',
        type: 'InsertOne',
        arguments: Schema('create'),
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

module.exports = CreateToolkitLink;
