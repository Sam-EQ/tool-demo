module.exports = {
    Block: {
        props: {
            styles: `
                width: 100%;
                display: flex;
                border-bottom: solid 1px #f0f0f0;
                margin-bottom: 10px;
                > * {
                    margin-top: 20px;
                    margin-bottom: 20px;
                }
            `,
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                                min-width: 180px;
                                width: 100%;
                                max-width: 360px;
                                margin-right: 20px;
                                margin-left: 20px;
                            `,
                            layout: [
                                {
                                    Skeleton: {
                                        props: {
                                            backgroundColor: '#f0f0f0',
                                            styles: `
                                                height: 18px;
                                                width: 75%;
                                                border-radius: 10px;
                                            `,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    Block: {
                        props: {
                            styles: `
                                width: 100%;
                                min-width: 200px;
                                max-width: 480px;
                                margin-right: 20px;
                                margin-left: 20px;
                            `,
                            layout: [
                                {
                                    Skeleton: {
                                        props: {
                                            backgroundColor: '#f0f0f0',
                                            styles: `
                                                height: 18px;
                                                width: 100%;
                                                border-radius: 10px;
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
