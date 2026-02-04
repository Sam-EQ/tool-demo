const { UpdateSchema } = require('../schema');
const document = require('./document');

const UpdatePublication = {
    type: 'mutation',
    name: 'UpdatePublication',
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
        document,
    },
};

module.exports = UpdatePublication;
