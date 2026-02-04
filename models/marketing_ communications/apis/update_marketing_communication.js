const { UpdateSchema } = require('../schema');
const document = require('./document');

const UpdateMarketingCommunication = {
    type: 'mutation',
    name: 'UpdateMarketingCommunication',
    spec: {
        use: 'v2',
        arguments: UpdateSchema(['_id', 'countryId', 'stateId', 'personIds', 'geojson', 'regionalDirectorId', 'regionName', 'countryName', 'stateName'], ['_id']),
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

module.exports = UpdateMarketingCommunication;
