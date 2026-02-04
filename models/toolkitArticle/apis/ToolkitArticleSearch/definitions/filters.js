module.exports = {
    my: {
        field: '_id',
        format: 'string',
        type: 'terms',
        resolve: {
            model: 'com.hub365.marketingtoolkit.models.JournalLikes',
            request: {
                type: 'query',
                query: 'AggregateForMyAll',
                arguments: {
                    userId: {
                        __RESOLVE: 'ESCAPE',
                        __VALUE: '$data.value',
                    },
                },
            },
            return: {
                __RESOLVE: 'ESCAPE',
                __VALUE: '$data',
            },
        },
    },
    createdAt: {
        field: 'createdAt',
        type: 'range',
        format: 'date',
        operator: {
            min: 'gte',
            max: 'lte',
        },
    },
    updatedAt: {
        field: 'updatedAt',
        type: 'range',
        format: 'date',
        operator: {
            min: 'gte',
            max: 'lte',
        },
    },
    articleStatus: {
        field: 'articleStatus.keyword',
        format: 'string',
        type: 'terms',
    },
    updateFlag: {
        field: 'updateFlag',
        format: 'boolean',
        type: 'terms',
    },
    resourceType: {
        field: 'resourceType.keyword',
        format: 'string',
        type: 'terms',
    },
    topics: {
        field: 'topics.keyword',
        format: 'string',
        type: 'terms',
    },
    keywords: {
        field: 'keywords.keyword',
        format: 'string',
        type: 'terms',
    },
    practices: {
        field: 'practices.keyword',
        format: 'string',
        type: 'terms',
    },
    practiceIds: {
        field: 'practiceIds',
        format: 'string',
        type: 'terms',
    },
    contributors: {
        field: 'contributors.keyword',
        format: 'string',
        type: 'terms',
    },
    disciplines: {
        field: 'disciplines.keyword',
        format: 'string',
        type: 'terms',
    },
    isGeneral: {
        field: 'isGeneral',
        format: 'boolean',
    },
};
