const Fields = require('./fields');

const UpdateFirmwidePublications = (fields = [
    '_id',
    'link',
    'name',
    'articleName',
    'publicationDate',
    'articlePdfId',
    'isCoverStory',
    'interviewedPersonId',
    'coverageSummary',
    'locationCovered',
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

module.exports = UpdateFirmwidePublications;
