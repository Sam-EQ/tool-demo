module.exports = {
    _id: '$data._id',
    personId: '$data.personId',
    personName: '$data.personName',
    personEmail: '$data.personEmail',
    studioId: '$data.studioId',
    office: {
        from: 'HUB',
        request: {
            model: 'com.hub365.studios.models.Studio',
            type: 'query',
            query: 'ReadStudio',
            arguments: {
                _id: '$data.document.studioId',
            },
            resolve: {
                _id: true,
                name: true,
                shortName: true,
            },
        },
        value: '$data',
    },
    description: '$data.description',
    resourceType: '$data.resourceType',
    topic: '$data.topic',
    relatedFiles: '$data.relatedFiles',
    createdAt: '$data.createdAt',
    updatedAt: '$data.updatedAt',
    creator: {
        from: 'HUB',
        request: {
            model: 'users',
            type: 'query',
            query: 'User',
            arguments: {
                userId: '$data.document.creatorId',
            },
            resolve: {
                _id: true,
                name: true,
                avatar: true,
            },
        },
        value: '$data',
    },
    updatedBy: {
        from: 'HUB',
        request: {
            model: 'users',
            type: 'query',
            query: 'User',
            arguments: {
                userId: '$data.document.updatedById',
            },
            resolve: {
                _id: true,
                name: true,
                avatar: true,
            },
        },
        value: '$data',
    },
    isDeleted: '$data.isDeleted',
};
