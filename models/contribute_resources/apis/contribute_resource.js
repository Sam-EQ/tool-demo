const ContributeResource = {
    type: 'query',
    name: 'ContributeResource',
    spec: {
        service: 'mongodb',
        type: 'ReadOne',
        arguments: {
            type: 'object',
            required: ['_id'],
            additionalProperties: false,
            properties: {
                _id: {
                    type: 'string',
                    format: 'objectId',
                    parse: 'objectId',
                },
            },
        },
        limitations: {},
        data: {},
        query: {
            query: {
                isDeleted: false,
                _id: '$data.arguments._id',
            },
        },
        result: {
            value: '$data',
        },
        document: '$data',
    },
};

module.exports = ContributeResource;
