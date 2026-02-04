const components = require('./components');

const PeopleAppId = {
    name: 'peopleAppId',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'Array',
        },
        edit: [
            components.selectAppId,
        ],
    },
};

module.exports = PeopleAppId;
