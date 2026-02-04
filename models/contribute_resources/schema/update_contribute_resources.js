/* eslint-disable max-len */
const Fields = require('./fields');

const UpdateContributeResources = (fields = ['_id', 'personId', 'personName', 'personEmail', 'studioId', 'description', 'resourceType', 'topic', 'relatedFiles'], required = [/* Default Fields Required for update */]) => ({
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

module.exports = UpdateContributeResources;
