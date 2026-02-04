const Desktop = require('./desktop');
const Mobile = require('./mobile');

const App = {
    type: 'App',
    name: 'Marketing Toolkit Admin',
    identifier: 'com.hub365.marketingtoolkitadmin',
    definition: {
        Desktop,
        Mobile,
    },
};

module.exports = App;
