const loading = require('./loading/table');
const columns = require('./columns');

module.exports = [
    {
        RTable: {
            props: {
                name: 'project-list',
                loadingSkeleton: {
                    styles: `
                    `,
                    layout: [
                        {
                            ContainerFluid: {
                                props: {
                                    layout: [
                                        {
                                            Row: {
                                                props: {
                                                    layout: [
                                                        loading,
                                                        loading,
                                                        loading,
                                                    ],
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
                styles: `
                    margin-top: 2rem;
                    @media only screen and (max-width: 680px) {
                        margin-top: 1.5rem;
                    }
                    .context-menu {
                        opacity: 1!important;
                    }
                `,
                columns: columns(),
            },
        },
    },
];
