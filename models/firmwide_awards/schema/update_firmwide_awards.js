const Fields = require('./fields');

const UpdateFirmwideAwards = (fields = ['_id',
    'name',
    'institution',
    'year',
    'month',
    'recipients',
], required = ['_id']) => ({
    type: 'object',
    required,
    additionalProperties: false,
    timestamps: {
        updatedAt: 'always',
    },
    actors: {
        updatedById: 'always',
    },
    properties: {
        ...fields.reduce((acc, field) => ({
            ...acc,
            [ field ]: Fields[ field ],
        }), {}),
        updatedAt: Fields.updatedAt,
        updatedById: Fields.updatedById,
    },
    minProperties: 1,
});

module.exports = UpdateFirmwideAwards;
