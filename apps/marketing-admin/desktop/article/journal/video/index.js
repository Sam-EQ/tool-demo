const forms = require('../../../forms');
const loading = require('../additionallinks/skeleton');
const thumbnail = require('./thumbnail');

module.exports = (type, title, path) => ({
    Block: {
        rerender: {
            name: 'video',
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
                                            children: 'Video',
                                        },
                                    },
                                },
                                {
                                    Row: {
                                        props: {
                                            layout: [
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
                                                            operator: 'notEmpty',
                                                            values: [
                                                                '$data.root.root.root.project.articleVideoType',
                                                            ],
                                                        },
                                                        props: {
                                                            icon: 'trash',
                                                            children: 'Delete',
                                                            onClick: {
                                                                action: 'api',
                                                                arguments: {
                                                                    request: {
                                                                        url: '`$data.app.settings.baseAPI.value`/graph',
                                                                        data: {
                                                                            model: '$data.app.models.ToolkitArticle',
                                                                            type: 'mutation',
                                                                            mutation: 'UpdateToolkitArticle',
                                                                            arguments: {
                                                                                _id: '$data.root.root.root.project._id',
                                                                                articleVideoType: '',
                                                                                articleVideoLink: '',
                                                                            },
                                                                        },
                                                                        method: 'POST',
                                                                        withCredentials: true,
                                                                    },
                                                                    onSuccess: [
                                                                        {
                                                                            action: 'close',
                                                                            arguments: {
                                                                                element: 'SideSheet',
                                                                            },
                                                                        },
                                                                        {
                                                                            action: 'rerender',
                                                                            arguments: {
                                                                                name: 'article_detail',
                                                                            },
                                                                        },
                                                                    ],
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    TextButton: {
                                                        condition: {
                                                            operator: 'empty',
                                                            values: [
                                                                '$data.root.root.root.project.articleVideoType',
                                                            ],
                                                        },
                                                        props: {
                                                            icon: 'plus',
                                                            children: 'Add Link',
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        title: 'Add Video Link',
                                                                        layout: [
                                                                            forms.project.video.edit('root.root.root.root.project', 'updateVideo', 'article_detail', 'video'),
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
                                                                                            formName: 'updateVideo',
                                                                                            onClick: {
                                                                                                action: 'form',
                                                                                                arguments: {
                                                                                                    type: 'submit',
                                                                                                    name: 'updateVideo',
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
                                                            operator: 'empty',
                                                            values: [
                                                                '$data.root.root.root.project.articleVideoType',
                                                            ],
                                                        },
                                                        props: {
                                                            icon: 'plus',
                                                            children: 'Upload Video',
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        title: 'Upload Video',
                                                                        layout: [
                                                                            forms.project.video.fileupload('root.root.root.root.project'),
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
                thumbnail('root.project'),
            ],
        },
    },
});
