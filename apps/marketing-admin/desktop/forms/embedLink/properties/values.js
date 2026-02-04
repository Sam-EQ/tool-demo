module.exports = (path, field) => ({
    [ field ]: {
        value: `$data.${ path }.${ field }`,
        label: `$data.${ path }.${ field }`,
    },
});
