const Fields = require('./fields');

const Schema = {
    type: 'object',
    required: [/* !!! Required Fields !!! */],
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
