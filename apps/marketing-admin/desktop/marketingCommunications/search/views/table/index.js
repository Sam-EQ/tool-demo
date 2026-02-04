const loading = require('./loading/table');
const columns = require('./columns');

module.exports = [
    {
        RTable: {
            props: {
                name: 'marketing-communications',
                loadingSkeleton: {
                    layout: [
                        {
                            ContainerFluid: {
                                props: {
                                    styles: `
                                        margin-top: 1.5rem;
                                    `,
                                    layout: [
                                        {
                                            Row: {
                                                props: {
                                                    layout: [
                                                        loading,
                                                        loading,
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
                    .react-table {
                        width: 100%;
                    }
                `,
                columns: columns(),
            },
        },
    },
];
