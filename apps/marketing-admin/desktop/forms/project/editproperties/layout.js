const textInput = (formName, name, label) => ({
    TextInput: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
        },
    },
});

const select = (formName, name, label, settingsName) => ({
    Select: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
            none: false,
            data: {
                from: 'STATIC',
                value: {
                    __RESOLVE: 'ARRAY',
                    __PATH: `$data.app.settings.${ settingsName }`,
                    __PIPELINE: [
                        {
                            map: {
                                key: '$data.each.resourceType.value',
                                label: '$data.each.resourceType.label',
                                value: '$data.each.resourceType.value',
                            },
                        },
                    ],
                },
            },
        },
    },
});

const selectFromArray = (formName, name, label) => ({
    Select: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
            none: false,
            data: {
                from: 'STATIC',
                value: [
                    {
                        label: 'Draft',
                        value: 'Draft',
                    },
                    {
                        label: 'Published',
                        value: 'Published',
                    },
                ],
            },
        },
    },
});

const checkbox = (formName, name, label) => ({
    Checkbox: {
        props: {
            label,
            name,
            formName,
        },
    },
});

const tags = (formName, name, label, settingName) => ({
    TagsInput: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
            none: false,
            data: {
                from: 'STATIC',
                value: {
                    __RESOLVE: 'ARRAY',
                    __PATH: `$data.app.settings.${ settingName }`,
                    __PIPELINE: [
                        {
                            function: {
                                params: 'data',
                                values: ['$data'],
                                function: `
                                   return data.sort((a,b)=> {
                                    if(a.label < b.label) {
                                        return -1;
                                    } else if(a.label > b.label < 0) {
                                        return 1;
                                    } else {
                                        return 1;
                                    }
                                   });
                                `,
                            },
                        },
                    ],
                },
            },
        },
    },
});

module.exports = (formName) => ([
    textInput(formName, 'articleTitle', 'Title'),
    select(formName, 'resourceType', 'Resource Type', 'ResourceType'),
    tags(formName, 'topics', 'Topic', 'subResourceType'),
    {
        Block: {
            data: {
                isAdmin: {
                    from: 'RESOLVE',
                    value: {
                        __RESOLVE: 'ANY',
                        __PATH: '$data.app.roles',
                        __PIPELINE: [
                            {
                                function: {
                                    params: 'values',
                                    values: ['$data'],
                                    function: `
                                        var opt = false;
                                        if(values.indexOf('Admin') !== -1){
                                            opt = true;
                                        } 
                                        return opt;
                                    `,
                                },
                            },
                        ],
                    },
                },
            },
            props: {
                isAdmin: '$data.isAdmin',
                layout: [
                    {
                        Block: {
                            condition: {
                                operator: '===',
                                values: [
                                    '$data.root.isAdmin', true,
                                ],
                            },
                            props: {
                                layout: [
                                    selectFromArray(formName, 'articleStatus', 'Status'),
                                ],
                            },
                        },
                    },
                    {
                        Block: {
                            condition: {
                                operator: '===',
                                values: [
                                    '$data.root.isAdmin', false,
                                ],
                            },
                            props: {
                                styles: 'display:none',
                                layout: [
                                    selectFromArray(formName, 'articleStatus', 'Status'),
                                ],
                            },
                        },
                    },

                ],
            },
        },
    },
    checkbox(formName, 'isPinned', 'Pin this article'),
]);
