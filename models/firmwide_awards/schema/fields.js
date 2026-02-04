const Fields = {
    _id: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    name: {
        type: 'string',
    },
    institution: {
        type: 'string',
    },
    year: {
        type: 'string',
    },
    month: {
        type: 'string',
    },
    recipients: {
        type: 'array',
        items: {
            type: 'string',
        },
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
