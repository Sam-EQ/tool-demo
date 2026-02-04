module.exports = {
    articleStatus: {
        field: 'articleStatus.keyword',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
    resourceType: {
        field: 'resourceType.keyword',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
    topics: {
        field: 'topics.keyword',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
    keywords: {
        field: 'keywords.keyword',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
    contributors: {
        field: 'contributors.keyword',
        type: 'terms',
        size: 1000,
    },
    practices: {
        field: 'practices.keyword',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
    practiceIds: {
        field: 'practiceIds.keyword',
        type: 'terms',
        size: 200,
    },
    disciplines: {
        field: 'disciplines.keyword',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
};
