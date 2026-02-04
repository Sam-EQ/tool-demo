const lightbox = require('./lightbox');

module.exports = (path) => ({
    Block: {
        rerender: {
            name: 'articleDescription',
            delay: 500,
        },
        skeleton: {
            styles: '',
            layout: [
                {
                    Container: {
                        props: {
                            styles: `
                            padding: 0;`,
                            grid: {
                                xxxl: 5,
                                xxl: 4,
                                xl: 4,
                                lg: 3,
                                md: 3,
                                sm: 3,
                                xs: 2,
                                xxs: 2,
                                xxxs: 1,
                            },
                            layout: [
                                {
                                    H4: {
                                        props: {
                                            children: 'Article Description',
                                        },
                                    },
                                },
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                                margin-top: 16px;
                                            `,
                                            layout: [
                                                require('../../../../common/loading/paragraph'),
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
        props: {
            project: `$data.${ path }`,
            styles: `
            `,
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                min-height: 18px;
                                .on-hover {
                                    > button {
                                        height: 18px;
                                        @media only screen and (max-width: 991px) {
                                            display: inline-flex;
                                        }
                                    }
                                }
                            `,
                            layout: [
                                {
                                    H4: {
                                        props: {
                                            children: 'Article Description',
                                        },
                                    },
                                },
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                                display: flex;
                                                align-items: center;
                                                button {
                                                    i {
                                                        margin-right: 0;
                                                    }
                                                }
                                                > button {
                                                    margin-left: 10px;
                                                }
                                            `,
                                            className: 'on-hover',
                                            layout: [
                                                {
                                                    TextButton: {
                                                        props: {
                                                            icon: 'pencil',
                                                            children: 'Edit',
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'Lightbox',
                                                                    props: lightbox,
                                                                },
                                                            },
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
                {
                    Block: {
                        condition: {
                            operator: 'notEmpty',
                            values: [
                                '$data.root.project.description',
                            ],
                        },
                        props: {
                            articleDescription: '$data.root.project.description',
                            layout: [
                                {
                                    Paragraph: {
                                        props: {
                                            styles: `
                                                margin-top: 24px;
                                            `,
                                            className: 'ql-editor',
                                            contentType: 'html',
                                            children: '$data.root.articleDescription',
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
});
