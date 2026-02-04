const fields = (type) => ({
    linkType: `${ type }`,
    title: '$data.title.value',
    linkURL: '$data.linkurl.value',
});
module.exports = (mutation, id, formName, type) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.ToolkitLink',
        type: 'mutation',
        mutation,
        arguments: formName === 'updateLink' ? {
            _id: `$data.${ id }`,
            ...fields(`${ type }`),
        } : {
            ...fields(`${ type }`),
            articleId: `$data.${ id }`,
        },
    },
});
