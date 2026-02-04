const components = require('../components');

const Studio = {
    name: 'Studio',
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

module.exports = Studio;
