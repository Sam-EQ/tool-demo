const data = require('./data');
const table = require('../table');

module.exports = {
    Search: {
        rerender: {
            name: 'resource-list',
            delay: 500,
        },
        props: {
            name: 'resource-search',
            data,
            syncUrlState: true,
            default: {
                view: 'table',
                sortBy: ['createdAt:asc'],
            },
            show: {
                filters: false,
                sort: false,
            },
            views: [
                {
                    name: 'table',
                    icon: 'table',
                },
            ],
            layout: {
                table,
            },
        },
    },
};
