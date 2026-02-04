module.exports = () => ({
    countryId: {
        type: 'String',
        required: true,
    },
    personIds: {
        type: 'Array',
        required: false,
    },
    stateId: {
        type: 'String',
        required: false,
        condition: {
            rule: {
                operator: 'notEmpty',
                values: [
                    '$data.formState.countryId.value.value',
                ],
            },
        },
        default: {
            label: null,
            value: null,
        },
    },
    geojson: {
        type: 'String',
        required: false,
        validation: {
            rule: {
                operator: 'or',
                conditions: [
                    {
                        operator: 'isJSON',
                        values: [
                            '$data.field.value.value',
                        ],
                    },
                    {
                        operator: '===',
                        values: ['$data.field.value.value', ''],
                    },
                ],
            },
            message: 'Not in JSON format',
        },
    },
    regionName: {
        type: 'String',
        required: false,
        default: {
            label: '',
            value: '',
        },
    },
    regionalDirectorId: {
        type: 'String',
        required: false,
        condition: {
            rule: {
                operator: 'notEmpty',
                values: [
                    '$data.formState.personIds.value.value',
                ],
            },
        },
        default: {
            label: null,
            value: null,
        },
    },
});
