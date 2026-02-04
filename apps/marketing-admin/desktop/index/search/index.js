const data = require('./data');
const header = require('./header');
const card = require('../card');
const filters = require('./filters');
const sort = require('./sort');

module.exports = {
    Search: {
        rerender: {
            name: 'card-list',
            delay: 500,
        },
        props: {
            name: 'card-search',
            data,
            header,
            filters,
            syncUrlState: true,
            sortBy: sort,
            default: {
                view: 'card',
                sortBy: ['createdAt:asc'],
            },
            views: [
                {
                    name: 'card',
                    icon: 'id-card',
                },
            ],
            layout: {
                card,
            },
        },
    },
};
