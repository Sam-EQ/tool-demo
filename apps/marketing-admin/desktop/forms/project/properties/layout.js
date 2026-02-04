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

const select = (formName, name, label, settingName) => ({
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
                    __PATH: `$data.app.settings.${ settingName }`,
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
    tags(formName, 'topics', 'Topics', 'subResourceType'),
]);
