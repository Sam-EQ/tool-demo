const document = require('../document');

const definitions = require('./definitions');

const ToolkitArticleSearch = {
    type: 'query',
    name: 'ToolkitArticleSearch',
    spec: {
        service: 'search',
        type: 'search',
        arguments: {
            type: 'object',
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
                filters: {
                    type: 'object',
                },
                sort: {
                    oneOf: [
                        {
                            type: 'object',
                        },
                        {
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                    ],
                },
                raw_query: {
                    type: 'object',
                },
            },
        },
        limitations: {},
        data: {},
        query: {
            definition: {
                search: definitions.search,
                filters: definitions.filters,
                sort: definitions.sort,
            },
            search: {
                query: '$data.arguments.query',
                filters: '$data.arguments.filters',
                aggs: '$data.arguments.aggs',
                sort: '$data.arguments.sort',
                raw_query: '$data.arguments.raw_query',
            },
            page: '$data.arguments.page',
            size: '$data.arguments.size',
        },
        result: {
            pagination: '$data.page_info',
            value: '$data.values',
            additional: {
                aggs: '$data.aggs',
            },
        },
        document: document.article,
    },
};

module.exports = ToolkitArticleSearch;
