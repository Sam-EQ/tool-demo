const document = require('./doucment');

const ContributeResources = {
    type: 'query',
    name: 'ContributeResources',
    spec: {
        service: 'mongodb',
        type: 'Read',
        arguments: {
            type: 'object',
            required: [],
            additionalProperties: false,
            properties: {
                page: {
                    type: 'number',
                },
                size: {
                    type: 'number',
                },
                query: {
                    type: 'string',
                    default: '',
                },
            },
        },
        limitations: {},
        data: {},
        query: {
            query: {
                isDeleted: false,
            },
            options: {
                page: '$data.arguments.page',
                size: '$data.arguments.size',
            },
        },
        result: {
            pagination: '$data.page_info',
            value: '$data.values',
        },
        document,
    },
};

module.exports = ContributeResources;
