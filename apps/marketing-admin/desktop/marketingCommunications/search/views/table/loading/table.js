module.exports = {
    Block: {
        props: {
            styles: `
                width: 100%;
                display: flex;
                border-bottom: solid 1px #f0f0f0;
                justify-content: space-between;
                margin-bottom: 10px;
                > * {
                    margin-top: 12px;
                    margin-bottom: 12px;
                }
            `,
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                                width: 280px;
                                max-width: 360px;
                                margin-right: 12px;
                                margin-left: 12px;
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
                                margin-right: 12px;
                                margin-left: 12px;
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
                {
                    Block: {
                        props: {
                            styles: `
                                width: 280px;
                                max-width: 360px;
                                margin-right: 12px;
                                margin-left: 12px;
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
                                width: 280px;
                                max-width: 360px;
                                margin-right: 12px;
                                margin-left: 12px;
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
            ],
        },
    },
};
