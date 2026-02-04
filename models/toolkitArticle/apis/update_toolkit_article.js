const Schema = require('../schema');
const Document = require('./document');

const UpdateToolkitArticle = {
    type: 'mutation',
    name: 'UpdateToolkitArticle',
    spec: {
        service: 'mongodb',
        type: 'UpdateOne',
        arguments: Schema('update', ['_id']),
        limitations: {},
        data: {},
        mutation: {
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
        result: {
            value: '$data',
        },
        document: Document.article,
    },
};

module.exports = UpdateToolkitArticle;
