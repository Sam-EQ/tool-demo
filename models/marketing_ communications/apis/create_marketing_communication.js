const { Schema } = require('../schema');
const document = require('./document');

const CreateMarketingCommunication = {
    type: 'mutation',
    name: 'CreateMarketingCommunication',
    spec: {
        use: 'v2',
        arguments: Schema,
        flows: [
            {
                use: 'service',
                name: 'insertOne',
                service: 'mongodb',
                method: 'InsertOne',
                spec: {
                    document: '$data.arguments',
                    options: {},
                },
            },
        ],
        result: {
            value: '$data.insertOne',
        },
        document,
    },
};

module.exports = CreateMarketingCommunication;
