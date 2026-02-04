module.exports = {
    Block: {
        props: {
            styles: `
                margin-top: 1.875rem;
                border-radius: 10px;
                box-shadow: 0 1px 4px 1px rgba(0,0,0,0.1);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                @media only screen and (max-width: 991px) {
                    margin: 0;
                    padding: 0;
                }
                > * {
                    width: 100%;
                }
            `,
            layout: [
                {
                    Skeleton: {
                        props: {
                            backgroundColor: '#f0f0f0',
                            styles: `
                                height: 200px;
                                width: 100%;
                                @media only screen and (max-width: 1440px) {
                                    height: 180px;
                                }
                                @media only screen and (max-width: 1170px) {
                                    height: 200px;
                                }
                                @media only screen and (max-width: 991px) {
                                    height: 190px;
                                }
                                @media only screen and (max-width: 800px) {
                                    height: 180px;
                                }
                                @media only screen and (max-width: 740px) {
                                    height: 160px;
                                }
                                @media only screen and (max-width: 680px) {
                                    height: 220px;
                                }
                                @media only screen and (max-width: 480px) {
                                    height: 200px;
                                }
                            `,
                        },
                    },
                }, {
                    Block: {
                        props: {
                            styles: `
                                display: flex;
                                padding: 20px 15px;
                                flex-direction: column;
                            `,
                            layout: [
                                {
                                    Skeleton: {
                                        props: {
                                            backgroundColor: '#f0f0f0',
                                            styles: `
                                                height: 14px;
                                                width: 100%;
                                                border-radius: 10px;
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
                                                width: 140px;
                                                margin-top: 10px;
                                                border-radius: 10px;
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
                                                width: 100%;
                                                margin-top: 10px;
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
