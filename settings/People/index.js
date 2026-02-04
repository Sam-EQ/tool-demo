const components = require('../components');

const People = {
    name: 'People',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'Array',
        },
        edit: [
            components.selectFromAPI('Custom Models'),
        ],
    },
};

module.exports = People;
