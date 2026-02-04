const APIS = require('./apis');
const { Schema } = require('./schema');

const Model = {
    name: 'ContributeResources',
    type: 'Database',
    services: {
        mongodb: {
            create_schema: true,
            alter_schema: true,
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
    schema: Schema,
    apis: APIS,
};

module.exports = Model;
