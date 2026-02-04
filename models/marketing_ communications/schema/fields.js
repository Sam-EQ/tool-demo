const Fields = {
    _id: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    countryId: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    countryName: {
        type: 'string',
    },
    stateId: {
        type: ['string', 'null'],
        format: 'objectId',
        parse: 'objectId',
    },
    stateName: {
        type: 'string',
    },
    personIds: {
        type: 'array',
        items: {
            type: 'string',
            format: 'objectId',
            parse: 'objectId',
        },
    },
    geojson: {
        type: 'string',
    },
    regionalDirectorId: {
        type: ['string', 'null'],
        format: 'objectId',
        parse: 'objectId',
    },
    regionName: {
        type: 'string',
    },
    createdAt: {
        type: 'string',
        format: 'date-time',
        parse: 'date-time',
    },
    updatedAt: {
        type: 'string',
        format: 'date-time',
        parse: 'date-time',
    },
    creatorId: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    updatedById: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    isDeleted: {
        type: 'boolean',
        default: false,
    },
};

module.exports = Fields;
