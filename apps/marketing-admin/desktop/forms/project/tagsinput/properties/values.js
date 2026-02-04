module.exports = (path, fieldName) => ({
    tags: {
        __RESOLVE: 'ARRAY',
        __PATH: `$data.${ path }.${ fieldName }`,
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
});
