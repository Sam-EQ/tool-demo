module.exports = (path, fieldName) => ({
    tags: {
        __RESOLVE: 'ARRAY',
        __PATH: `$data.${ path }.${ fieldName }`,
        __PIPELINE: [
            {
                map: {
                    key: '$data.each._id',
                    label: '`$data.each.name.first` `$data.each.name.last`',
                    value: '$data.each._id',
                },
            },
        ],
        __DEFAULT: [],
    },
});
