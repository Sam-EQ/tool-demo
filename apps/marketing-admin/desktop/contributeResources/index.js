const search = require('./search');

module.exports = {
    Page: {
        props: {
            header: {
                type: 'Primary',
                back: {
                    name: 'Back',
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
                styles: '',
            },
            layout: [
                search,
            ],
        },
    },
};
