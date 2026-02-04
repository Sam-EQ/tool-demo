const aggs = require('./aggs');

module.exports = {
    table: {
        request: {
            url: '`$data.app.settings.baseAPI.value`/graph',
            withCredentials: true,
            method: 'POST',
            data: {
                model: '$data.app.models.MarketingCommunications',
                type: 'query',
                query: 'MarketingCommunicationsSearch',
                arguments: {
                    page: '$data.page',
                    size: 50,
                    query: '$data.query',
                    filters: '$data.filters',
                    aggs,
                },
                resolve: {
                    _id: true,
                    countryId: true,
                    stateId: true,
                    personIds: true,
                    geojson: true,
                    country: true,
                    state: true,
                    regionName: true,
                    regionalDirectorId: true,
                    regionalDirector: true,
                    countryName: true,
                    stateName: true,
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
};
