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

const Schema = (type = 'create', required = [/* Fields to be required while creating!!! */]) => ({
    type: 'object',
    required,
    additionalProperties: false,
    ...Common[ type ].fields,
    properties: {
        ...Common[ type ].properties,
        title: {
            type: 'string',
        },
        linkURL: {
            type: 'string',
        },
        linkType: {
            type: 'string',
        },
        thumbnailId: {
            type: 'string',
        },
        articleId: {
            type: 'string',
            format: 'objectId',
            parse: 'objectId',
        },
    },
});

module.exports = Schema;
