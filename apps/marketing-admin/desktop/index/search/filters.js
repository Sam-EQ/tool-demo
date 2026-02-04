const fromAggsFilters = (name, aggs, label, search = false) => ({
    type: 'Multiple',
    name,
    label,
    search,
    availableFilter: aggs,
    defaultOpen: false,
    data: {
        from: 'AGGS',
    },
});

const fromAPI = ({
    name, label, availableFilter, model, query, resolve = { _id: true, name: true }, itemLabel = '$data.name',
}) => ({
    type: 'Multiple',
    name,
    label,
    search: true,
    availableFilter,
    data: {
        from: 'API',
        request: {
            method: 'POST',
            url: '`$data.app.settings.baseAPI.value`/graph',
            data: {
                model,
                type: 'query',
                query,
                arguments: {
                    size: 10,
                    query: '$data.search',
                    page: '$data.page',
                    raw_query: {
                        terms: {
                            _id: '$data.available',
                        },
                    },
                    sort: ['firstName:asc'],
                },
                resolve,
            },
        },
        list: '$data.value.values',
        page: '$data.value.page_info.page',
        totalPages: '$data.value.page_info.total_pages',
        item: {
            key: '$data._id',
            label: itemLabel,
            value: '$data._id',
        },
    },
});

module.exports = [
    fromAggsFilters('articleStatus', 'articleStatus', 'Status'),
    fromAggsFilters('resourceType', 'resourceType', 'Resource Type'),
    fromAggsFilters('topics', 'topics', 'Topic'),
    fromAggsFilters('keywords', 'keywords', 'Tags', true),
    {
        type: 'Tag',
        name: 'isGeneral',
        multiple: false,
        isBoolean: true,
        label: 'General',
        search: false,
        data: {
            value: [
                {
                    label: 'General',
                    value: true,
                    key: 'General',
                },
            ],
        },
    },
    fromAPI({
        name: 'practiceIds',
        label: 'Practices',
        availableFilter: 'practiceIds',
        model: 'com.hub365.practices.models.Practice',
        query: 'PracticesSearch',
        itemLabel: '$data.name',
    }),
    fromAggsFilters('disciplines', 'disciplines', 'Disciplines', true),
    fromAPI({
        name: 'contributors',
        label: 'Contributors',
        availableFilter: 'contributors',
        model: 'com.hub365.people.models.People',
        query: 'SearchPeople',
        itemLabel: '`$data.name.first` `$data.name.last`',
    }),
    {
        type: 'Tag',
        name: 'updateFlag',
        multiple: false,
        isBoolean: true,
        label: 'Flagged For update',
        search: false,
        data: {
            value: [
                {
                    label: 'Requested',
                    value: true,
                    key: 'Requested',
                },
            ],
        },
    },
];
