module.exports = () => ({
    articleTitle: {
        type: 'String',
        required: true,
    },
    resourceType: {
        type: 'String',
        required: true,
    },
    topics: {
        type: 'Array',
        required: true,
    },
});
