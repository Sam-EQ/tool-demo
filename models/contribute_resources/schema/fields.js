const Fields = {
    _id: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    personId: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    personName: {
        type: 'string',
    },
    personEmail: {
        type: 'string',
    },
    studioId: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    description: {
        type: 'string',
    },
    resourceType: {
        type: 'string',
    },
    topic: {
        type: 'string',
    },
    relatedFiles: {
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
