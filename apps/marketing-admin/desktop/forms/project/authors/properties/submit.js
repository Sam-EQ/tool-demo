const fields = (path, fieldName) => ({
    [ fieldName ]: '$data.tags.value',
});
module.exports = (mutation, id, fieldName, path) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.ToolkitArticle',
        type: 'mutation',
        mutation,
        arguments: {
            _id: `$data.${ id }`,
            ...fields(path, fieldName),
        },
        resolve: {
            _id: true,
            contributorIds: true,
            contributors: true,
        },
    },
});
