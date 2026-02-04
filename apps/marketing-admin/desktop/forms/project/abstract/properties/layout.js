const loading = require('../../../../../common/loading');

const wysiwyg = (formName, name, label, fieldName, id) => ([
    {
        WYSIWYG: {
            condition: {
                operator: '===',
                values: [
                    `${ fieldName }`, 'description',
                ],
            },

            props: {
                required: `$data.root.fields.${ name }.required`,
                formName,
                name,
                label,
                scrollingContainer: '.scrolling-container',
                toolBar: [
                    ['blockquote', 'code-block'],
                    ['link'],
                    ['video'],
                    [{ indent: '-1' }, { indent: '+1' }],
                    [{ direction: 'rtl' }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ color: [] }, { background: [] }],
                    [{ font: [] }],
                    ['raw'],
                ],
                imageModule: true,
                imageUpload: {
                    request: {
                        url: '`$data.app.settings.baseAPI.value`/graph',
                        method: 'POST',
                        withCredentials: true,
                        data: {
                            file: '$data.files.0',
                            tagToField: 'toolkitArticleId',
                            tagToId: `${ id }`,
                        },
                    },
                },
                mediaLibrary: {
                    search: {
                        request: {
                            url: '`$data.app.settings.baseAPI.value`/graph',
                            method: 'POST',
                            withCredentials: 'true',
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

                                                {
                                                    match: {
                                                        'customFields.toolkitArticleId': `${ id }`,
                                                    },
                                                },

                                            ],
                                        },
                                    },
                                },
                                resolve: {
                                    name: true,
                                    creator: true,
                                    _id: true,
                                    title: true,
                                    customFields: true,
                                    type: true,
                                },

                            },
                        },
                        results: '$data.request.value.values',
                        pages: '$data.request.value.page_info.total_pages',
                        item: {
                            url: '$data.app.settings.fileAPI.value/thumbnail/`$data._id`',
                            title: '$data.title',
                            creatorAvatar: '$data.creator.avatar',
                            creatorName: '`$data.creator.name.first` `$data.creator.name.last`',
                            value: '$data._id',
                        },
                    },

                    upload: {
                        request: {
                            url: '`$data.app.settings.fileAPI.value`/upload',
                            method: 'POST',
                            withCredentials: true,
                            data: {
                                file: '$data.files.0',
                                tagToField: 'toolkitArticleId',
                                tagToId: `${ id }`,
                            },
                        },
                    },
                    skeleton: loading.MediaSkeleton,
                },
            },
        },
    },
    {
        WYSIWYG: {
            condition: {
                operator: '!==',
                values: [
                    `${ fieldName }`, 'description',
                ],
            },

            props: {
                required: `$data.root.fields.${ name }.required`,
                formName,
                name,
                label,
                scrollingContainer: '.scrolling-container',
                toolBar: [
                    ['blockquote', 'code-block'],
                    ['link'],
                    ['video'],
                    [{ indent: '-1' }, { indent: '+1' }],
                ],
            },
        },
    },
]);

module.exports = (formName, fieldName, id) => (
    wysiwyg(formName, 'tags', '', fieldName, id)
);
