const selectFromAPI = ({
    formName, name, label, model, query, args = {}, otherProps = {}, filter = undefined,
}) => ({
    Select: {
        props: {
            formName,
            name,
            label,
            manualSearch: true,
            none: false,
            allowSearch: true,
            required: `$data.root.fields.${ name }.required`,
            ...otherProps,
            data: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    withCredentials: true,
                    method: 'POST',
                    data: {
                        model,
                        type: 'query',
                        query,
                        arguments: {
                            page: 0,
                            size: 100,
                            query: '$data.query',
                            ...args,
                        },
                    },
                },
                list: {
                    __RESOLVE: 'ARRAY',
                    __PATH: '$data.request.value.values',
                    __PIPELINE: [
                        {
                            map: {
                                key: '$data.each._id',
                                label: '$data.each.name',
                                value: '$data.each._id',
                            },
                        },
                    ],
                },
                filter,
            },
        },
    },
});

const tagsInput = (formName, name, label = '') => ({
    TagsInput: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
            none: false,
            addNewlabel: 'Add Person',
            data: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        model: 'com.hub365.people.models.People',
                        type: 'query',
                        query: 'SearchPeople',
                        arguments: {
                            size: 20,
                            page: 0,
                            query: '$data.query',
                        },
                        resolve: {
                            _id: true,
                            name: true,
                        },
                    },
                },
                list: {
                    __RESOLVE: 'ARRAY',
                    __PATH: '$data.request.value.values',
                    __PIPELINE: [
                        {
                            map: {
                                key: '$data.each._id',
                                label: '`$data.each.name.first` `$data.each.name.last`',
                                value: '$data.each._id',
                            },
                        },
                    ],
                },
            },
        },
    },
});

const textArea = (formName, name, label) => ({
    TextArea: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
        },
    },
});

module.exports = (formName) => ([
    selectFromAPI(
        {
            formName,
            name: 'countryId',
            label: 'Country',
            model: 'com.hub365.countries.models.Countries',
            query: 'CountriesSearch',
        },
    ),
    {
        Select: {
            props: {
                formName,
                name: 'stateId',
                label: 'State',
                manualSearch: true,
                none: false,
                allowSearch: true,
                required: '$data.root.root.fields.communications.fields.stateId.required',
                data: {
                    from: 'API',
                    request: {
                        url: '`$data.app.settings.baseAPI.value`/graph',
                        withCredentials: true,
                        method: 'POST',
                        data: {
                            model: 'com.hub365.countries.models.State',
                            type: 'query',
                            query: 'StateSearch',
                            arguments: {
                                __RESOLVE: 'OBJECT',
                                __PATH: '$data',
                                __PIPELINE: [
                                    {
                                        condition: [
                                            {
                                                operator: 'notEmpty',
                                                values: ['$data.formState.countryId.value.value'],
                                                return: {
                                                    page: 0,
                                                    size: 20,
                                                    query: '$data.query',
                                                    sort: {
                                                        name: 'asc',
                                                    },
                                                    raw_query: {
                                                        term: {
                                                            'countryName.keyword': '$data.formState.countryId.value.label',
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                page: 0,
                                                size: 20,
                                                query: '$data.query',
                                                sort: {
                                                    name: 'asc',
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            resolve: {
                                _id: true,
                                name: true,
                            },
                        },
                    },
                    list: {
                        __RESOLVE: 'ARRAY',
                        __PATH: '$data.request.value.values',
                        __PIPELINE: [
                            {
                                map: {
                                    key: '$data.each._id',
                                    label: '$data.each.name',
                                    value: '$data.each._id',
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
    tagsInput(formName, 'personIds', 'People'),
    {
        Select: {
            props: {
                formName,
                name: 'regionalDirectorId',
                label: 'Regional Director',
                manualSearch: true,
                none: false,
                allowSearch: true,
                required: false,
                data: {
                    from: 'STATIC',
                    value: '$data.formState.personIds.value',
                },
            },
        },
    },
    {
        Select: {
            props: {
                formName,
                name: 'regionName',
                label: 'Region Name',
                manualSearch: true,
                allowSearch: true,
                required: false,
                data: {
                    from: 'STATIC',
                    value: {
                        __RESOLVE: 'ANY',
                        __PATH: '$data.app.settings.regionalDirectors.value',
                        __PIPELINE: [
                            {
                                map: {
                                    label: '$data.each.heading',
                                    value: '$data.each.heading',
                                },
                            },
                        ],
                        __DEFAULT: [],
                    },
                },
            },
        },
    },
    textArea(formName, 'geojson', 'Geojson'),
]);
