module.exports = (flag, id, count, totallikes) => ({
    Like: {
        props: {
            styles: `
                cursor: pointer;
                i {
                    font-size: 1rem;
                }
            `,
            preventDefault: true,
            count: `$data.${ count }`,
            value: `$data.${ flag }`,
            totallikes: `$data.${ totallikes }`,
            onAdd: {
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        model: 'com.hub365.marketingtoolkit.models.JournalLikes',
                        type: 'mutation',
                        mutation: 'createJournalLike',
                        arguments: {
                            journalId: `$data.${ id }`,
                        },
                    },
                },
                result: '$data.request.value',
            },
            onChange: {
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        model: 'com.hub365.marketingtoolkit.models.JournalLikes',
                        type: 'mutation',
                        mutation: 'deleteJournalLike',
                        arguments: {
                            _id: '$data.value._id',
                            journalId: `$data.${ id }`,
                        },
                    },
                },
            },
            onSuccess: {
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
                                _id: `$data.${ id }`,
                                likesCount: '$data.count',
                            },
                        },
                    },
                    onSuccess: {
                        action: 'rerender',
                        arguments: {
                            name: 'meta',
                        },
                    },
                },
            },
            icon: 'star',
        },
    },
});
