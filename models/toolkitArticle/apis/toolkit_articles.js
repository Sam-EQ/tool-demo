const Document = require('./document');

const ToolkitArticles = {
    type: 'query',
    name: 'ToolkitArticles',
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
                $or: [
                    {
                        title: {
                            $regex: '$data.arguments.query',
                            $options: 'i',
                        },
                    },
                ],
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
        document: Document.article,
    },
};

module.exports = ToolkitArticles;
