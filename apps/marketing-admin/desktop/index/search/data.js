const aggs = require('./aggs');

module.exports = {
    card: {
        request: {
            url: '`$data.app.settings.baseAPI.value`/graph',
            withCredentials: true,
            method: 'POST',
            data: {
                model: '$data.app.models.ToolkitArticle',
                type: 'query',
                query: 'ToolkitArticleSearch',
                arguments: {
                    page: '$data.page',
                    size: 20,
                    query: '$data.query',
                    sort: '$data.sortBy',
                    filters: '$data.filters',
                    aggs,
                    raw_query: {
                        term: {
                            isDeleted: false,
                        },
                    },
                },
                resolve: {
                    _id: true,
                    title: true,
                    thumbnailId: true,
                    resourceType: true,
                    articleStatus: true,
                    status: true,
                    practiceIds: true,
                },
            },
        },
        filtersAvailable: {
            __RESOLVE: 'OBJECT',
            __PATH: '$data.request.value.aggs',
            __DEFAULT: {},
        },
        results: '$data.request.value.values',
        page: '$data.request.value.page_info.page',
        count: '$data.request.value.page_info.count',
        totalCount: '$data.request.value.page_info.total_count',
        totalPages: '$data.request.value.page_info.total_pages',
    },
    table: 'card',
};
