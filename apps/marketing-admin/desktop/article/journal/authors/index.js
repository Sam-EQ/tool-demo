const forms = require('../../../forms');
const list = require('./list');
const loading = require('./loading/card');

module.exports = (path) => ({
    Block: {
        rerender: {
            name: 'authors',
            delay: 500,
        },
        skeleton: {
            layout: [
                {
                    Container: {
                        props: {
                            styles: `
                            padding: 0;
                            margin: 0;`,
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
                                            children: 'Contributors',
                                        },
                                    },
                                },
                                {
                                    Row: {
                                        props: {
                                            styles: `
                                            .col {
                                                margin: 0;
                                            }
                                            `,
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
        props: {
            project: `$data.${ path }`,
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
                                            children: 'Contributors',
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
                                                            icon: 'plus',
                                                            children: 'Add',
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        title: 'Authors',
                                                                        layout: [
                                                                            forms.project.authors.edit('root.root.root.root.project', 'updateProject', 'authors', 'contributors'),
                                                                        ],
                                                                        active: true,
                                                                        footer: {
                                                                            right: [
                                                                                {
                                                                                    Button: {
                                                                                        props: {
                                                                                            variants: ['medium', 'large', 'rounded', 'subtle'],
                                                                                            children: 'Cancel',
                                                                                            onClick: {
                                                                                                action: 'close',
                                                                                                arguments: {
                                                                                                    element: 'sideSheet',
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                {
                                                                                    FormButton: {
                                                                                        reducer: {
                                                                                            form: 'form',
                                                                                        },
                                                                                        props: {
                                                                                            variants: ['medium', 'large', 'rounded', 'primary'],
                                                                                            children: 'Submit',
                                                                                            formName: 'updateProject',
                                                                                            onClick: {
                                                                                                action: 'form',
                                                                                                arguments: {
                                                                                                    type: 'submit',
                                                                                                    name: 'updateProject',
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
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
                        data: {
                            contributors: {
                                from: 'RESOLVE',
                                value: {
                                    __RESOLVE: 'ANY',
                                    __PATH: '$data',
                                    __PIPELINE: [
                                        {
                                            function: {
                                                params: 'data',
                                                values: ['$data'],
                                                function: ` 
                                                        var val = data.root.project.contributors != null ? data.root.project.contributors : [];   
                                                        return val;
                                                    `,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                        props: {
                            styles: `
                                .container {
                                    padding: 0px;
                                }
                            `,
                            contributors: '$data.contributors',
                            layout: list,
                        },
                    },
                },
            ],
        },
    },
});
