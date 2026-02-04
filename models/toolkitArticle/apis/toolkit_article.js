const Document = require('./document');

const ToolkitArticle = {
    type: 'query',
    name: 'ToolkitArticle',
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
        document: Document.article,
    },
};

module.exports = ToolkitArticle;
