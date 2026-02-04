const FlagAdminUsers = {
    name: 'flagAdminUsers',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'Array',
        },
        edit: [
            {
                TagsInput: {
                    props: {
                        required: true,
                        label: 'Flag Admin Users',
                        data: {
                            from: 'API',
                            request: {
                                method: 'POST',
                                url: '`$data.app.settings.baseAPI.value`/graph',
                                withCredentials: true,
                                data: {
                                    model: 'users',
                                    type: 'query',
                                    query: 'Users',
                                    arguments: {
                                        page: 0,
                                        size: 20,
                                        search: '$data.query',
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
                        newSuggestion: {
                            enabled: false,
                        },
                        addNewlabel: 'Add Flag Admin User',
                    },
                },
            },
        ],
    },
};

module.exports = FlagAdminUsers;
