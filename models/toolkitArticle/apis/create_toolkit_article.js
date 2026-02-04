const Schema = require('../schema');

const CreateToolkitArticle = {
    type: 'mutation',
    name: 'CreateToolkitArticle',
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

module.exports = CreateToolkitArticle;
