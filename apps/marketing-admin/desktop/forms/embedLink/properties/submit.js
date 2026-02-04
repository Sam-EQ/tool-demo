module.exports = (path, field) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.ToolkitArticle',
        type: 'mutation',
        mutation: 'UpdateToolkitArticle',
        arguments: {
            _id: `$data.${ path }._id`,
            [ field ]: `$data.${ field }.value`,
        },
        resolve: {
            _id: true,
            [ field ]: true,
        },
    },
});
