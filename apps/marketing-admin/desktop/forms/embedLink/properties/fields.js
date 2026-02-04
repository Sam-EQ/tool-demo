module.exports = (field) => ({
    [ field ]: {
        type: 'String',
        required: false,
        default: {
            label: '',
            value: '',
        },
    },
});
