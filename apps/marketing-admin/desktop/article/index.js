const meta = require('./meta');
const journal = require('./journal');

module.exports = {
    MasterDetail: {
        name: 'projectPage',
        rerender: {
            name: 'master-detail',
            delay: 500,
        },
        props: {
            styles: `
                background-color: #fff;
                .page-style {
                    min-height: 100vh;
                }
            `,
            header: {
                type: 'Primary',
                back: {
                    name: 'Search',
                    icon: 'chevron-left',
                    path: '/`$data.router.params.app`',
                },
                styles: '',
            },
            meta: {
                styles: '',
                layout: [meta],
            },
            navigation: {
                enabled: true,
                type: 'Tabs',
                styles: '',
                withinPage: true,
                manualRoutes: {
                    '/': {
                        name: '',
                        id: 'info',
                    },
                },
            },
            routes: {
                '': {
                    name: 'Info',
                    exact: true,
                    props: {
                        styles: `
                        .fallback-no-results {
                            font-size:14px;
                            h5 {
                                font-size:14px;
                            }
                        }`,
                        layout: [
                            journal(),
                        ],
                    },
                },
            },
        },
    },
};
