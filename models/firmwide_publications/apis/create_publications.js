const { Schema } = require('../schema');
const document = require('./document');

const CreatePublications = {
    type: 'mutation',
    name: 'CreatePublications',
    spec: {
        use: 'v2',
        arguments: {
            type: 'array',
            items: Schema,
            minItems: 1,
        },
        flows: [
            {
                use: 'service',
                name: 'insert',
                service: 'mongodb',
                method: 'Insert',
                spec: {
                    documents: '$data.arguments',
                    options: {},
                },
            },
        ],
        result: {
            value: '$data.insert',
        },
        document,
    },
};

module.exports = CreatePublications;
