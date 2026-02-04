const Fields = {
    _id: {
        type: 'string',
        format: 'objectId',
        parse: 'objectId',
    },
    link: {
        type: 'string',
    },
    name: {
        type: 'string',
    },
    articleName: {
        type: 'string',
    },
    publicationDate: {
        type: ['string', 'null'],
        format: 'date-time',
        parse: 'date-time',
    },
    articlePdfId: {
        type: ['string', 'null'],
    },
    isCoverStory: {
        type: 'boolean',
    },
    interviewedPersonId: {
        type: 'array',
        items: {
            type: 'string',
            format: 'objectId',
            parse: 'objectId',
        },
    },
    coverageSummary: {
        type: ['string', 'null'],
    },
    locationCovered: {
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
