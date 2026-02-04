module.exports = (path) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: 'Files',
        type: 'mutation',
        mutation: 'UpdateFile',
        arguments: {
            _id: `$data.${ path }.iconfile._id`,
            update: {
                title: '$data.title.value',
            },
        },
    },
});
