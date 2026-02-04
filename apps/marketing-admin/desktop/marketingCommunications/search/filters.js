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
                    size: 20,
                    query: '$data.search',
                    page: '$data.page',
                    raw_query: {
                        terms: {
                            _id: '$data.available',
                        },
                    },
                    sort: ['name:asc'],
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

module.exports = [
    fromAPI({
        name: 'countryId',
        label: 'Country',
        availableFilter: 'countryId',
        model: 'com.hub365.countries.models.Countries',
        query: 'CountriesSearch',
        itemLabel: '$data.name',
    }),
    fromAPI({
        name: 'personIds',
        label: 'Person',
        availableFilter: 'personIds',
        model: 'com.hub365.people.models.People',
        query: 'SearchPeople',
        itemLabel: '`$data.name.first` `$data.name.last`',
    }),
    fromAPI({
        name: 'regionalDirectorId',
        label: 'Regional Director',
        availableFilter: 'regionalDirectorId',
        model: 'com.hub365.people.models.People',
        query: 'SearchPeople',
        itemLabel: '`$data.name.first` `$data.name.last`',
    }),
    fromAggsFilters('regionName', 'regionName', 'Region Name'),
];
