const tagsInput = ({
    formName, name, label, addlabel, data, change, toolTip,
}) => ({
    TagsInput: {
        toolTip,
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
            data,
            addNewlabel: addlabel,
            onChange: change,
        },
    },
});

module.exports = (formName) => ([
    {
        Checkbox: {
            props: {
                formName,
                name: 'isGeneral',
                label: 'General',
                required: false,
            },
        },
    },
    tagsInput({
        formName,
        name: 'practices',
        label: 'Practices',
        addlabel: 'Add Practices',
        data: {
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
                        size: 100,
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
            list: {
                __RESOLVE: 'ARRAY',
                __PATH: '$data.request.value.values',
                __PIPELINE: [
                    {
                        function: {
                            params: 'props',
                            values: ['$data'],
                            function: `
                               var res = props;
                               res.unshift({"_id": "All", "name":"All"});
                               return res.map(el => ({
                                        key: el._id,
                                        label: el.name,
                                        value: el._id,
                                }))
                            `,
                        },
                    },
                ],
            },
        },
        change: {
            action: 'form',
            arguments: {
                type: 'updateForm',
                value: {
                    __RESOLVE: 'Object',
                    __PATH: {
                        changeValue: '$data',
                        practices: '$data.root.practices',
                    },
                    __PIPELINE: [{
                        function: {
                            params: 'props',
                            function: `
                                const foundItem = props.changeValue.value.find(item => item.value === "All");
                                if(foundItem !== undefined){
                                    return {
                                        practices: props.practices.map(el => ({
                                                key: el._id,
                                                label: el.name,
                                                value: el._id,
                                        }))
                                    }
                                }
                            `,
                            values: ['$data'],
                        },
                    }],
                },
            },
        },
        toolTip: undefined,
    }),
    tagsInput({
        formName,
        name: 'disciplines',
        label: 'Disciplines',
        addlabel: 'Add Disciplines',
        data: {
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
            list: {
                __RESOLVE: 'ARRAY',
                __PATH: '$data.request.value.values',
                __PIPELINE: [
                    {
                        function: {
                            params: 'props',
                            values: ['$data'],
                            function: `
                               var res = props;
                               res.unshift({"_id": "All", "name":"All"});
                               return res.map(el => ({
                                        key: el.name,
                                        label: el.name,
                                        value: el.name,
                                }))
                            `,
                        },
                    },
                ],
            },
        },
        change: {
            action: 'form',
            arguments: {
                type: 'updateForm',
                value: {
                    __RESOLVE: 'Object',
                    __PATH: {
                        changeValue: '$data',
                        disciplines: '$data.root.disciplines',
                    },
                    __PIPELINE: [{
                        function: {
                            params: 'props',
                            function: `
                                const foundItem = props.changeValue.value.find(item => item.value === "All");
                                if(foundItem !== undefined){
                                    return {
                                        disciplines: props.disciplines.map(el => ({
                                                key: el.name,
                                                label: el.name,
                                                value: el.name,
                                        }))
                                    }
                                }
                            `,
                            values: ['$data'],
                        },
                    }],
                },
            },
        },
        toolTipL: undefined,
    }),
]);
