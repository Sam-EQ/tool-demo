const forms = require('../../../forms');
const list = require('../additionallinks/list');
const loading = require('../additionallinks/skeleton');

module.exports = (type, title, path) => ({
    Block: {
        rerender: {
            name: `link-${ type }`,
            delay: 1000,
        },
        data: {
            journal: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    withCredentials: true,
                    method: 'POST',
                    data: {
                        model: '$data.app.models.ToolkitLink',
                        type: 'query',
                        query: 'ToolkitLinks',
                        arguments: {
                            articleId: '$data.router.params.articleId',
                            linkType: `${ type }`,
                        },
                        resolve: {
                            _id: true,
                            title: true,
                            linkURL: true,
                            linkType: true,
                            thumbnailId: true,
                        },
                    },
                },
            },
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
                                            children: 'Original File Location',
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
            links: '$data.journal.value',
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
                                            children: `${ title }`,
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
                                                        condition: {
                                                            operator: 'empty',
                                                            values: [
                                                                '$data.root.root.root.links',
                                                            ],
                                                        },
                                                        props: {
                                                            icon: 'plus',
                                                            children: 'Add',
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        title: 'Link',
                                                                        layout: [
                                                                            forms.project.links.add('root.root.root.root.project', 'createLink', `link-${ type }`, `${ type }`),
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
                                                                                            formName: 'createLink',
                                                                                            onClick: {
                                                                                                action: 'form',
                                                                                                arguments: {
                                                                                                    type: 'submit',
                                                                                                    name: 'createLink',
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

                                                {
                                                    TextButton: {
                                                        condition: {
                                                            operator: 'notEmpty',
                                                            values: [
                                                                '$data.root.root.root.links',
                                                            ],
                                                        },
                                                        props: {
                                                            icon: 'pencil',
                                                            children: 'Edit',
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        title: 'Link',
                                                                        layout: [
                                                                            forms.project.links.thumbnail('root.root.root.root.links.0', `link-${ type }`),
                                                                            forms.project.links.edit('root.root.root.root.links.0', 'updateLink', `link-${ type }`, `${ type }`),
                                                                        ],
                                                                        active: true,
                                                                        footer: {
                                                                            left: [
                                                                                {
                                                                                    TextButton: {
                                                                                        props: {
                                                                                            variants: ['large', 'medium', 'subtle', 'rounded'],
                                                                                            children: 'Delete',
                                                                                            color: 'danger',
                                                                                            icon: 'trash',
                                                                                            onClick: {
                                                                                                action: 'api',
                                                                                                arguments: {
                                                                                                    request: {
                                                                                                        url: '`$data.app.settings.baseAPI.value`/graph',
                                                                                                        data: {
                                                                                                            model: '$data.app.models.ToolkitLink',
                                                                                                            type: 'mutation',
                                                                                                            mutation: 'DeleteToolkitLink',
                                                                                                            arguments: {
                                                                                                                _id: '$data.root.root.root.root.links.0._id',
                                                                                                            },
                                                                                                        },
                                                                                                        method: 'POST',
                                                                                                        withCredentials: true,
                                                                                                    },
                                                                                                    onSuccess: [
                                                                                                        {
                                                                                                            action: 'rerender',
                                                                                                            arguments: {
                                                                                                                name: `link-${ type }`,

                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            action: 'close',
                                                                                                            arguments: {
                                                                                                                element: 'sideSheet',
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
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
                                                                                            formName: 'updateLink',
                                                                                            onClick: {
                                                                                                action: 'form',
                                                                                                arguments: {
                                                                                                    type: 'submit',
                                                                                                    name: 'updateLink',
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
                        props: {
                            styles: `
                            margin-top:1.5rem;
                            .container {
                                padding: 0px;
                            }`,
                            layout: list(type, 'root.root.links'),
                        },
                    },
                },
            ],
        },
    },
});
