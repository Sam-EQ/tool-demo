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
    articleStatus: {
        type: 'String',
    },
    isPinned: {
        type: 'Boolean',
        required: false,
    },
});
