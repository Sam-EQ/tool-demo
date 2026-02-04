const { UpdateSchema } = require('../schema');

const UpdateAward = {
    type: 'mutation',
    name: 'UpdateAward',
    spec: {
        use: 'v2',
        arguments: UpdateSchema(),
        flows: [
            {
                use: 'service',
                name: 'updateOne',
                service: 'mongodb',
                method: 'UpdateOne',
                spec: {
                    filter: {
                        _id: '$data.arguments._id',
                    },
                    update: {
                        $set: '$data.arguments',
                    },
                    options: {
                        returnDocument: 'after',
                    },
                },
            },
        ],
        result: {
            value: '$data.updateOne',
        },
        document: '$data',
    },
};

module.exports = UpdateAward;
