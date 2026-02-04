const Fields = require('./fields');

const Schema = {
    type: 'object',
    required: ['name'],
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
