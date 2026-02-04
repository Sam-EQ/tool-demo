const index = require('./index/index');
const article = require('./article/index');
const resources = require('./contributeResources');
const marketingCommunication = require('./marketingCommunications');

const Desktop = {
    version: '0.0.0',
    requirements: {
        application: 1,
    },
    definition: {
        MultiPage: {
            props: {
                routes: {
                    '/': index,
                    '/:articleId': article,
                    '/marketingCommunication': marketingCommunication,
                    '/contributeResources': resources,
                },
            },
        },
    },
};

module.exports = Desktop;
