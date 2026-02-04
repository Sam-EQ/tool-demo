const ToolkitLinks = {
    type: 'query',
    name: 'ToolkitLinks',
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
                linkType: {
                    type: 'string',
                    default: '',
                },
                articleId: {
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
                articleId: '$data.arguments.articleId',
                linkType: '$data.arguments.linkType',
            },
        },
        result: {
            pagination: '$data.page_info',
            value: '$data.values',
        },
        document: '$data',
    },
};

module.exports = ToolkitLinks;
