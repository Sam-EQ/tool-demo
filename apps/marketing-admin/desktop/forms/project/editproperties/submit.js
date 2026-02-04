const fields = {
    title: '$data.articleTitle.value',
    resourceType: '$data.resourceType.value',
    topics: '$data.topics.value',
    isPinned: '$data.isPinned.value',
    articleStatus: '$data.articleStatus.value',
};
module.exports = (mutation, id) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.ToolkitArticle',
        type: 'mutation',
        mutation,
        arguments: {
            _id: `$data.${ id }`,
            ...fields,
        },
    },
});
