module.exports = () => ({
    isGeneral: {
        type: 'Boolean',
        required: false,
        default: {
            value: false,
        },
    },
    practices: {
        type: 'Array',
        default: [],
        condition: {
            rule: {
                operator: '!==',
                values: ['$data.formState.isGeneral.value.value', true],
            },
        },
    },
    disciplines: {
        type: 'Array',
        default: [],
        required: false,
        condition: {
            rule: {
                operator: '!==',
                values: ['$data.formState.isGeneral.value.value', true],
            },
        },
    },
});
