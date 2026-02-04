module.exports = (path, fieldName) => ({
    tags: {
        value: {
            __RESOLVE: 'STRING',
            __PATH: `$data.${ path }.${ fieldName }`,
            __DEFAULT: '',
        },
        label: `$data.${ path }.${ fieldName }`,
    },
});
