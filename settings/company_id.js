const CompanyId = {
    name: 'companyId',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'String',
        },
        edit: [
            {
                Select: {
                    props: {
                        none: false,
                        required: true,
                        label: 'CompanyId',
                        data: {
                            from: 'API',
                            request: {
                                url: '`$data.app.settings.baseAPI.value`/graph',
                                withCredentials: true,
                                method: 'POST',
                                data: {
                                    model: 'com.hub365.company.models.Company',
                                    type: 'query',
                                    query: 'CompanySearch',
                                    arguments: {
                                        page: '$data.page',
                                        size: 20,
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
        ],
    },
};

module.exports = CompanyId;
