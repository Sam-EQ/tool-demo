module.exports = (path) => ({
    Dropzone: {
        props: {
            label: 'Upload Thumbnail',
            accept: `
                image/jpeg,
                image/png,
                image/psd,
                image/tiff,
                image/gif
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
                        tagToField: 'toolkitArticleThumbnail',
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
                                    thumbnailId: '$data.response.value._id',
                                },
                            },
                        },

                        onSuccess: [
                            {
                                action: 'rerender',
                                arguments: {
                                    name: 'meta',
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
});
