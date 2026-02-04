const forms = require('../../../forms');
const list = require('./list');
const loading = require('./skeleton');

module.exports = (path) => ({
    Block: {
        props: {
            project: `$data.${ path }`,
            styles: `
            `,
            layout: [
                {
                    Block: {
                        props: {
                            project: '$data.root.project',
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
                                    H5: {
                                        props: {
                                            children: 'Associated Files',
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
                                                                        title: 'Upload File',
                                                                        layout: [
                                                                            forms.project.fileupload('root.root.root.project'),
                                                                        ],
                                                                        active: true,
                                                                        footer: {
                                                                            right: [],
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
                        rerender: {
                            name: 'mediafiles',
                            delay: 1000,
                        },
                        data: {
                            iconslist: {
                                from: 'API',
                                request: {
                                    url: '`$data.app.settings.baseAPI.value`/graph',
                                    method: 'POST',
                                    withCredentials: true,
                                    data: {
                                        model: 'Files',
                                        type: 'query',
                                        query: 'Files',
                                        arguments: {
                                            page: 0,
                                            size: 20,
                                            query: {
                                                bool: {
                                                    must: [
                                                        {
                                                            match: {
                                                                'customFields.toolkitArticleId': '$data.router.params.articleId',
                                                            },
                                                        },
                                                        {
                                                            match: {
                                                                'settings.isDeleted': false,
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
                                                    Row: {
                                                        props: {
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
                            styles: ` 
                                .container {
                                    padding: 0px;
                          
                                }
                            `,
                            fileslist: '$data.iconslist.value.values',
                            allfileslist: '$data.iconslist.value.values',
                            layout: [
                                {
                                    H6:
                                    {
                                        condition: {
                                            operator: 'empty',
                                            values: [
                                                '$data.root.fileslist',
                                            ],
                                        },
                                        props: {
                                            styles: 'text-align:center;',
                                            children: 'No results found',
                                        },
                                    },
                                },
                                list,
                            ],
                        },
                    },
                },
            ],
        },
    },
});
