const APIS = require('./apis');
const Schema = require('./schema');

const Model = {
    name: 'ToolkitLink',
    type: 'Database',
    services: {
        mongodb: {
            create_schema: true,
            alter_schema: true,
        },
    },
    parent: 'com.hub365.marketingtoolkitadmin',
    schema: Schema('create'),
    apis: APIS,
};

module.exports = Model;
