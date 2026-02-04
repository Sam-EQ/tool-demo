module.exports = (path) => ({
    Dropzone: {
        props: {
            label: 'Upload File',
            accept: ` 
                .webm,
                .mpg,
                .mp2,
                .mpeg,
                .mpe,
                .mpv,
                .ogg,
                .mp4,
                .m4p,
                .m4v,
                .avi,
                .wmv,
                .mov,
                .qt,
                .flv,
                .swf,
                .avchd,
                .obj,
                .fbx
            `,
            multiple: false,
            upload: {
                action: 'API',
                request: {
                    url: '`$data.app.settings.FileAPI.value`/upload',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        file: '$data.files.0',
                        tagToField: 'toolkitArticleIdVideo',
                        tagToId: `$data.${ path }._id`,
                    },
                },
                thumbnail: '$data.image',
            },
            onSuccess: [
                {
                    action: 'api',
                    arguments: {
                        request: {
                            method: 'POST',
                            url: '`$data.app.settings.baseAPI.value`/graph',
                            withCredentials: true,
                            data: {
                                model: '$data.app.models.ToolkitArticle',
                                type: 'mutation',
                                mutation: 'UpdateToolkitArticle',
                                arguments: {
                                    _id: `$data.${ path }._id`,
                                    articleVideoType: 'File Upload',
                                    articleVideoLink: '',
                                    articleVideoId: '$data.response.value._id',
                                },
                            },
                        },

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
                                    name: 'article_detail',
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
});
