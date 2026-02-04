const fields = {
    title: '$data.articleTitle.value',
    resourceType: '$data.resourceType.value',
    topics: '$data.topics.value',
    articleStatus: 'Draft',
};
module.exports = (mutation) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.ToolkitArticle',
        type: 'mutation',
        mutation,
        arguments: {
            ...fields,
        },
    },
});
