const definitions = require('./definitions');

const AwardsSearch = {
    type: 'query',
    name: 'AwardsSearch',
    spec: {
        use: 'v2',
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
                    default: {
                        term: {
                            isDeleted: false,
                        },
                    },
                },
                aggs: {
                    type: 'object',
                },
            },
        },
        flows: [
            {
                use: 'service',
                name: 'search',
                service: 'search',
                method: 'Search',
                spec: {
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
            },
        ],
        result: {
            pagination: '$data.search.page_info',
            value: '$data.search.values',
            additional: {
                aggs: '$data.search.aggs',
            },
        },
        document: '$data',
    },
};

module.exports = AwardsSearch;
