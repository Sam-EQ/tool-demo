const APIS = require('./apis');
const Schema = require('./schema');

const Model = {
    name: 'ToolkitArticle',
    type: 'Database',
    services: {
        mongodb: {
            create_schema: false,
            alter_schema: false,
        },
        elasticsearch: {
            create_schema: false,
            alter_schema: false,
            sync: 'mongodb',
        },
        search: {
            create_schema: false,
            alter_schema: false,
        },
    },
    parent: 'com.hub365.marketingtoolkitadmin',
    schema: Schema('create'),
    apis: APIS,
};

module.exports = Model;
