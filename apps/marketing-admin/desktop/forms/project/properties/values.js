module.exports = (path) => ({
    articleTitle: {
        value: `$data.${ path }.title`,
        label: `$data.${ path }.title`,
    },
    resourceType: {
        value: `$data.${ path }.resourceType`,
        label: `$data.${ path }.resourceType`,
    },
});
