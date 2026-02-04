const tagInput = (formName, name, label) => ({
    TagsInput: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
            addNewlabel: 'Add New Contributors',
            data: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    withCredentials: true,
                    method: 'POST',
                    data: {
                        model: 'com.hub365.people.models.People',
                        type: 'query',
                        query: 'SearchPeople',
                        arguments: {
                            page: 0,
                            size: 20,
                            query: '$data.query',
                            sort: {
                                firstName: 'asc',
                            },
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

module.exports = (formName) => ([
    tagInput(formName, 'tags', ''),
]);
