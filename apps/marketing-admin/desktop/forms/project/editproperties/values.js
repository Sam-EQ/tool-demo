module.exports = (path) => ({
    articleTitle: {
        value: `$data.${ path }.title`,
        label: `$data.${ path }.title`,
    },
    resourceType: {
        value: `$data.${ path }.resourceType`,
        label: `$data.${ path }.resourceType`,
    },
    topics: {
        __RESOLVE: 'ARRAY',
        __PATH: `$data.${ path }.topics`,
        __PIPELINE: [
            {
                map: {
                    key: '$data.each',
                    label: '$data.each',
                    value: '$data.each',
                },
            },
        ],
        __DEFAULT: [],
    },
    articleStatus: {
        value: `$data.${ path }.articleStatus`,
        label: `$data.${ path }.articleStatus`,
    },
    isPinned: {
        value: `$data.${ path }.isPinned`,
        label: `$data.${ path }.isPinned`,
    },
});
