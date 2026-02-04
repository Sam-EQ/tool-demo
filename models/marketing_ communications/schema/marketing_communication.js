const Fields = require('./fields');

const Schema = {
    type: 'object',
    required: ['countryId', 'personIds'],
    additionalProperties: false,
    timestamps: {
        createdAt: 'once',
        updatedAt: 'always',
    },
    actors: {
        creatorId: 'once',
        updatedById: 'always',
    },
    index: {
        field: '_id',
        type: 'objectId',
    },
    properties: Fields,
};

module.exports = Schema;
