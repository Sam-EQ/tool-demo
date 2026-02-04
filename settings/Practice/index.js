const components = require('../components');

const Practice = {
    name: 'Practice',
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

module.exports = Practice;
