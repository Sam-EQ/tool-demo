const thumbnailImage = (formName, name, label) => ({
    File: {
        props: {
            arrayName: 'ResourceType',
            arrayIndex: '$data.root.index',
            formName,
            name,
            label,
            mediaLibrary: {
                search: {
                    request: {
                        url: '`$data.app.settings.baseAPI.value`/graph',
                        method: 'POST',
                        withCredentials: true,
                        data: {
                            model: 'files',
                            type: 'query',
                            query: 'Files',
                            arguments: {
                                page: 0,
                                size: 20,
                                query: {
                                    bool: {
                                        must: [
                                            {
                                                match: {
                                                    'customFields.MarketingAdmin': '$data.app._id',
                                                },
                                            },
                                            {
                                                match: {
                                                    type: 'Image',
                                                },
                                            },
                                            {
                                                query_string: {
                                                    query: '*`$data.query`*',
                                                    fields: [
                                                        'title',
                                                    ],
                                                },
                                            },
                                            {
                                                match: {
                                                    'settings.isDeleted': false,
                                                },
                                            },
                                        ],
                                    },
                                },
                                sort: ['createdAt:desc'],
                            },
                            resolve: {
                                creator: true,
                                _id: true,
                                bucket: true,
                                customFields: true,
                                extension: true,
                                meta: true,
                                name: true,
                                size: true,
                                title: true,
                                type: true,
                                url: true,
                                settings: true,

                            },
                        },
                    },
                    results: '$data.request.value.values',
                    pages: '$data.request.value.page_info.total_pages',
                    item: {
                        url: '`$data.app.settings.FileAPI.value`/thumbnail/`$data._id`',
                        title: '$data.title',
                        creatorAvatar: '$data.creator.avatar',
                        creatorName: '`$data.creator.name.first` `$data.creator.name.last`',
                        value: '$data._id',
                        isDeletable: {
                            __RESOLVE: 'BOOLEAN',
                            __PATH: '$data',
                            __PIPELINE: [
                                {
                                    condition: {
                                        operator: 'or',
                                        conditions: [
                                            {
                                                operator: '===',
                                                values: [
                                                    '$data.creator._id',
                                                    '$data.user._id',
                                                ],
                                            },
                                            {
                                                operator: '===',
                                                values: [
                                                    '$data.user.isTenantAdmin',
                                                    true,
                                                ],
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                },
                upload: {
                    request: {
                        url: '`$data.app.settings.FileAPI.value`/upload',
                        method: 'POST',
                        withCredentials: true,
                        data: {
                            file: '$data.files.0',
                            tagToField: 'MarketingAdmin',
                            tagToId: '$data.app._id',
                        },
                    },
                },
                onDeleteImage: {
                    request: {
                        url: '`$data.app.settings.baseAPI.value`/graph',
                        method: 'POST',
                        withCredentials: true,
                        data: {
                            model: 'Files',
                            type: 'mutation',
                            mutation: 'DeleteFile',
                            arguments: {
                                _id: '$data.file.value',
                            },
                            resolve: {
                                _id: true,
                            },
                        },
                    },
                },
                skeleton: [
                    {
                        Text: {
                            props: {
                                children: 'Loading',
                            },
                        },
                    },
                ],
            },
        },
    },
});

const ResourceType = {
    name: 'ResourceType',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'ObjectArray',
            fields: {
                resourceType: {
                    type: 'String',
                    default: {
                        value: '',
                        label: '',
                    },
                },
                imageId: {
                    type: 'String',
                    default: {
                        value: '',
                        label: '',
                    },
                },
            },
            default: [{
                resourceType: {
                    label: '',
                    value: '',
                },
                imageId: {
                    label: '',
                    value: '',
                },
            }],
        },
        edit: [
            {
                FormList: {
                    props: {
                        arrayName: 'ResourceType',
                        showDelete: true,
                        item: {
                            layout: [
                                {
                                    TextInput: {
                                        props: {
                                            formName: 'settings_ResourceType',
                                            name: 'resourceType',
                                            arrayName: 'ResourceType',
                                            arrayIndex: '$data.root.index',
                                            label: 'Resource Type',
                                        },
                                    },
                                },
                                thumbnailImage('settings_ResourceType', 'imageId', 'Thumbnail'),
                            ],
                        },
                    },
                },
            },
            {
                Button: {
                    reducer: {
                        form: 'form',
                    },
                    props: {
                        icon: 'plus',
                        children: 'Add New Practice',
                        onClick: {
                            action: 'form',
                            arguments: {
                                type: 'addFormField',
                                value: {
                                    form: 'settings_ResourceType',
                                    field: 'ResourceType',
                                },
                            },
                        },
                    },
                },
            },
        ],
        result: {
            __RESOLVE: 'ARRAY',
            __PATH: '$data.ResourceType',
            __PIPELINE: [{
                map: {
                    resourceType: {
                        value: '$data.each.resourceType.value',
                        label: '$data.each.resourceType.value',
                    },
                    imageId: {
                        value: '$data.each.imageId.value',
                        label: '$data.each.imageId.value.url',
                    },
                },
            }],
        },
    },
};

module.exports = ResourceType;
