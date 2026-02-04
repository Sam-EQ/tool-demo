module.exports = {
    Column: {
        props: {
            responsive: {
                xxxl: 1,
                xxl: 1,
                xl: 1,
                lg: 1,
                md: 1,
                sm: 1,
                xs: 1,
                xxs: 1,
                xxxs: 1,
            },
            styles: `
                width: 100%;
            `,
            layout: [
                {
                    Card: {
                        props: {
                            styles: `
                                padding: 0px;
                                border-radius: 8px;
                                display: flex;
                                flex-direction: row;
                                width: 100%;
                                height: 120px;
                                @media only screen and (max-width: 1140px) {
                                    padding: 0px;
                                }
                            `,
                            layout: [
                                {
                                    Skeleton: {
                                        props: {
                                            backgroundColor: '#f0f0f0',
                                            styles: `
                                                height: 100%;
                                                width: 160px;
                                            `,
                                        },
                                    },
                                },
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                                display: flex;
                                                flex-direction: column;
                                                padding: 15px;
                                            `,
                                            layout: [
                                                {
                                                    Skeleton: {
                                                        props: {
                                                            backgroundColor: '#f0f0f0',
                                                            styles: `
                                                                height: 14px;
                                                                width: 150px;
                                                                border-radius: 8px;
                                                            `,
                                                        },
                                                    },
                                                },
                                                {
                                                    Skeleton: {
                                                        props: {
                                                            backgroundColor: '#f0f0f0',
                                                            styles: `
                                                                height: 14px;
                                                                width: 70px;
                                                                margin-top: 8px;
                                                                border-radius: 8px;
                                                            `,
                                                        },
                                                    },
                                                },
                                                {
                                                    Skeleton: {
                                                        props: {
                                                            backgroundColor: '#f0f0f0',
                                                            styles: `
                                                                height: 14px;
                                                                width: 70px;
                                                                margin-top: 8px;
                                                                border-radius: 8px;
                                                            `,
                                                        },
                                                    },
                                                },
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
    },
};
