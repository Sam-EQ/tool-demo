const search = require('./search');

module.exports = {
    Page: {
        condition: {
            operator: 'in',
            values: ['$data.app.roles', 'Marketing Communications Admin'],
        },
        props: {
            header: {
                type: 'Primary',
                back: {
                    name: 'Search',
                    path: '/`$data.router.params.app`',
                },
                hide: {
                    header: false,
                    back: false,
                    user: false,
                    notifications: false,
                    logo: false,
                    search: false,
                },
                styles: `
                    background-color: #f6f6f6;
                `,
            },
            layout: [
                search,
            ],
        },
    },
};
