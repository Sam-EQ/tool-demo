const Common = {
    update: {
        fields: {
            timestamps: {
                updatedAt: 'always',
            },
            actors: {
                updatedById: 'always',
            },
        },
        properties: {
            _id: {
                type: 'string',
                format: 'objectId',
                parse: 'objectId',
            },
            updatedAt: {
                type: 'string',
                format: 'date-time',
                parse: 'date-time',
            },
            updatedById: {
                type: 'string',
                format: 'objectId',
                parse: 'objectId',
            },
        },
    },
    create: {
        fields: {
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
        },
        properties: {
            _id: {
                type: 'string',
                format: 'objectId',
                parse: 'objectId',
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
        },
    },
};

const Schema = (type = 'create', required = ['title']) => ({
    type: 'object',
    required,
    additionalProperties: false,
    ...Common[ type ].fields,
    properties: {
        ...Common[ type ].properties,
        title: {
            type: 'string',
        },
        resourceType: {
            type: 'string',
        },
        subResource: {
            type: 'string',
        },
        topics: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        subResourceType: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        description: {
            type: 'string',
        },
        abstract: {
            type: 'string',
        },
        descriptionText: {
            type: 'string',
            excerpt: {
                field: 'description',
                length: 10000,
            },
        },
        abstractText: {
            type: 'string',
            excerpt: {
                field: 'abstract',
                length: 10000,
            },
        },
        keywords: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        thumbnailId: {
            type: 'string',
        },
        practices: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        disciplines: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        practiceIds: {
            type: 'array',
            items: {
                type: 'string',
                format: 'objectId',
                parse: 'objectId',
            },
        },
        isGeneral: {
            type: 'boolean',
        },
        isPinned: {
            type: 'boolean',
        },
        contributors: {
            type: 'array',
            items: {
                type: 'string',
                format: 'objectId',
                parse: 'objectId',
            },
        },
        associatedFiles: {
            type: 'array',
            items: {
                type: 'string',
                format: 'objectId',
                parse: 'objectId',
            },
        },
        articleVideoId: {
            type: 'string',
        },
        articleVideoLink: {
            type: 'string',
        },
        articleVideoType: {
            type: 'string',
        },
        likesCount: {
            type: 'number',
        },
        updateFlag: {
            type: 'boolean',
        },
        flagNote: {
            type: 'string',
        },
        flaggedById: {
            type: 'string',
            format: 'objectId',
            parse: 'objectId',
        },
        articleStatus: {
            type: 'string',
            enum: [
                'Draft',
                'Published',
                '',
            ],
        },
        miroLink: {
            type: 'string',
        },
        issuuLink: {
            type: 'string',
        },
    },
});

module.exports = Schema;
