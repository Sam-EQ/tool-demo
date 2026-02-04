const properties = require('./properties');

module.exports = (path, formName, rerenderName) => ({
    Form: {
        data: {
            practices: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    withCredentials: true,
                    method: 'POST',
                    data: {
                        model: 'com.hub365.practices.models.Practice',
                        type: 'query',
                        query: 'PracticesSearch',
                        arguments: {
                            page: 0,
                            size: 20,
                            raw_query: {
                                bool: {
                                    must: [
                                        {
                                            term: {
                                                'companyId.keyword': '$data.app.settings.companyId.value',
                                            },
                                        },
                                        {
                                            term: {
                                                isActive: true,
                                            },
                                        },
                                        {
                                            term: {
                                                isDeleted: false,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                        resolve: {
                            _id: true,
                            name: true,
                        },
                    },
                },
            },
            disciplines: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    withCredentials: true,
                    method: 'POST',
                    data: {
                        model: 'com.hub365.practices.models.Disciplines',
                        type: 'query',
                        query: 'DisciplineSearch',
                        arguments: {
                            size: 20,
                            raw_query: {
                                bool: {
                                    must: [
                                        {
                                            match: {
                                                companyId: '$data.app.settings.companyId.value',
                                            },
                                        },
                                        {
                                            match: {
                                                isActive: true,
                                            },
                                        },
                                        {
                                            match: {
                                                isDeleted: false,
                                            },
                                        },
                                    ],
                                },
                            },
                            sort: [
                                'sortOrder:asc',
                            ],
                        },
                        resolve: {
                            _id: true,
                            name: true,
                        },
                    },
                },
            },
        },
        skeleton: {
            layout: [
                {
                    Container: {
                        props: {
                            styles: `
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                margin-top: 2rem;
                                '@ @sm' {
                                    margin-top: 2rem;
                                },
                            `,
                            layout: [
                                {
                                    Spinner: {
                                        props: {
                                            styles: {
                                                transform: 'scale(2)',
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
        props: {
            practices: '$data.practices.value.values',
            disciplines: '$data.disciplines.value.values',
            isInline: false,
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName),
            submit: [properties.submit('UpdateToolkitArticle', `${ path }._id`, path)],
            values: properties.values(path),
            onSuccess: [
                {
                    action: 'close',
                    arguments: {
                        element: 'SideSheet',
                    },
                },
                {
                    action: 'rerender',
                    arguments: {
                        name: rerenderName,
                        definition: {
                            props: {
                                project: '$data.responses.0.value',
                            },
                        },
                    },
                },
            ],
        },
    },
});
