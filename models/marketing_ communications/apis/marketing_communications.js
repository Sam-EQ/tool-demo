const document = require('./document');

const MarketingCommunications = {
    type: 'query',
    name: 'MarketingCommunications',
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
                filters: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        prohibitedCountry: {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                                $in: {
                                    type: 'array',
                                },
                                $nin: {
                                    type: 'array',
                                },
                            },
                        },
                    },
                },
            },
        },
        flows: [
            {
                use: 'service',
                name: 'read',
                service: 'mongodb',
                method: 'Read',
                spec: {
                    query: {
                        __RESOLVE: 'ANY',
                        __PATH: '$data.arguments',
                        __PIPELINE: [{
                            function: {
                                params: 'props',
                                values: ['$data'],
                                function: `
                                    const query = {
                                        isDeleted: false
                                    };
                                    if (props.filters.prohibitedCountry.$nin) {
                                        query[ 'countryName' ] = {
                                            $nin: props.filters.prohibitedCountry.$nin,
                                        };
                                    }
                                    if (props.filters.prohibitedCountry.$in) {
                                        query[ 'countryName' ] = {
                                            $in: props.filters.prohibitedCountry.$in,
                                        };
                                    }
                                    return query;
                                `,
                            },
                        }],
                    },
                    options: {
                        page: '$data.arguments.page',
                        size: '$data.arguments.size',
                    },
                },
            },
        ],
        result: {
            pagination: '$data.read.page_info',
            value: '$data.read.values',
        },
        document,
    },
};

module.exports = MarketingCommunications;
