const { Schema } = require('../schema');

const CreatePublication = {
    type: 'mutation',
    name: 'CreatePublication',
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
        document: '$data',
    },
};

module.exports = CreatePublication;
