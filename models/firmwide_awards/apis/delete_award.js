const { UpdateSchema } = require('../schema');

const DeleteAward = {
    type: 'mutation',
    name: 'DeleteAward',
    spec: {
        use: 'v2',
        arguments: UpdateSchema(['_id'], ['_id']),
        flows: [
            {
                use: 'service',
                name: 'deleteOne',
                service: 'mongodb',
                method: 'UpdateOne',
                spec: {
                    filter: {
                        _id: '$data.arguments._id',
                    },
                    update: {
                        $set: {
                            isDeleted: true,
                            updatedAt: '$data.arguments.updatedAt',
                            updatedById: '$data.arguments.updatedById',
                        },
                    },
                    options: {
                        returnDocument: 'after',
                    },
                },
            },
        ],
        result: {
            value: '$data.deleteOne',
        },
        document: '$data',
    },
};

module.exports = DeleteAward;
