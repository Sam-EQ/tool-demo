const Fields = require('./fields');

const UpdateMarketingAdmin = (fields = [/* Default Fields to be updated */], required = [/* Default Fields Required for update */]) => ({
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

module.exports = UpdateMarketingAdmin;
