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
                                margin-top: 24px;
                                border-radius: 8px;
                                display: flex;
                                flex-direction: row;
                                width: 100%;
                                height: 140px;
                            `,
                            layout: [
                                {
                                    Skeleton: {
                                        props: {
                                            backgroundColor: '#f0f0f0',
                                            styles: `
                                                height: 100%;
                                                width: 100%;
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
};
