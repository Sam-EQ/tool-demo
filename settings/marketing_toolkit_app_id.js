const components = require('./components');

const MarketingToolkitAppId = {
    name: 'marketingToolkitAppId',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'String',
        },
        edit: [
            components.selectAppId,
        ],
    },
};

module.exports = MarketingToolkitAppId;
