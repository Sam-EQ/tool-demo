const loading = require('../../../../common/loading/twoLine');
const forms = require('../../../forms');

module.exports = (type, links) => ([
    {
        LazyList: {
            props: {
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
                loadingSkeleton: {
                    styles: '',
                    layout: [
                        {
                            Container: {
                                props: {
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
                styles: `
                    padding: 0px;
                    ul {
                    li { 
                        min-height: 120px;
                        &:empty {
                            &:before {
                                content: '';
                                position: absolute;
                                top: 16px;
                                bottom: 0;
                                left: 16px;
                                right: 16px;
                                overflow: hidden;
                                background-color: white;
                                border-radius: 10px;
                                box-shadow: 0 1px 4px 1px rgba(0,0,0,0.1);
                            }
                        }
                        > .block {
                            .on-hover {
                                display: none;
                                @media only screen and (max-width: 991px) {
                                    display: flex;
                                }
                            }
                            &:hover {
                                .on-hover {
                                    display: flex;
                                }
                                figure {
                                    &:before {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                }
                `,
                data: `$data.${ links }`,
                item: {
                    layout: [
                        {
                            Paper: {
                                props: {
                                    link: '$data.root',
                                    layout: [
                                        {
                                            Block: {
                                                props: {
                                                    styles: `
                                                        display: flex;
                                                        justify-content: space-between;
                                                       
                                                    `,
                                                    layout: [
                                                        {
                                                            Block: {
                                                                props: {
                                                                    as: 'figure',
                                                                    styles: `
                                                                        position: relative;
                                                                        max-width:50px;
                                                                        > img {
                                                                            width: 100%;
                                                                            height: auto;
                                                                            object-fit: cover;
                                                                            max-width: 100%;
                                                                            flex-shrink: 0;
                                                                        }
                                                                    `,
                                                                    layout: [
                                                                        {
                                                                            Image: {
                                                                                condition: {
                                                                                    operator: 'empty',
                                                                                    values: [
                                                                                        '$data.root.root.root.link.thumbnailId',
                                                                                    ],
                                                                                },
                                                                                props: {
                                                                                    variants: ['small'],
                                                                                    src: 'https://projecthub365-assets.s3.amazonaws.com/hub-ui/svg/Marketing-toolkit-default-icon.svg',
                                                                                },
                                                                            },
                                                                        },
                                                                        {
                                                                            Image: {
                                                                                condition: {
                                                                                    operator: 'notEmpty',
                                                                                    values: [
                                                                                        '$data.root.root.root.link.thumbnailId',
                                                                                    ],
                                                                                },
                                                                                props: {
                                                                                    variants: ['small'],
                                                                                    src: '`$data.app.settings.FileAPI.value`/download/`$data.root.root.root.link.thumbnailId`?size=480',
                                                                                    placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-ui/svg/Marketing-toolkit-default-icon.svg',
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
                                                                        display: flex;
                                                                        justify-content: space-between;
                                                                        flex: 1;                                                                    
                                                                    `,
                                                                    link: '$data.root.root.link',
                                                                    onClick: {
                                                                        action: 'navigate',
                                                                        arguments: {
                                                                            url: '$data.link.linkURL',
                                                                            newTab: true,
                                                                        },
                                                                    },
                                                                    layout: [
                                                                        {
                                                                            Block: {
                                                                                props: {
                                                                                    link: '$data.root.root.root.link',
                                                                                    styles: `display:flex;
                                                                                    align-items:flex-start;
                                                                                    flex-direction:row;
                                                                                    cursor:pointer;`,
                                                                                    onClick: {
                                                                                        action: 'navigate',
                                                                                        arguments: {
                                                                                            url: '$data.link.linkURL',
                                                                                            newTab: true,
                                                                                        },
                                                                                    },
                                                                                    layout: [
                                                                                        {
                                                                                            Block: {
                                                                                                props: {
                                                                                                    styles: `display:flex;
                                                                                                    align-items:flex-start;
                                                                                                    flex-direction:column;
                                                                                                    margin-left:0.75rem`,
                                                                                                    layout: [
                                                                                                        {
                                                                                                            Text: {
                                                                                                                props: {
                                                                                                                    variants: ['medium'],
                                                                                                                    styles: '',
                                                                                                                    children: '`$data.root.root.link.title`',
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            Text: {
                                                                                                                props: {
                                                                                                                    styles: `
                                
                                                                                                                    color:#909090;
                                                                                                                    &:not(:empty) {
                                                                                                                        margin-top: 5px;
                                                                                                                    }`,
                                                                                                                    variants: ['small'],
                                                                                                                    children: '`$data.root.root.link.linkURL`',
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
                                                        },
                                                        {
                                                            Block: {
                                                                props: {
                                                                    link: '$data.root.root.link',
                                                                    styles: `
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
                                                                                    children: '',
                                                                                    onClick: {
                                                                                        action: 'open',
                                                                                        arguments: {
                                                                                            element: 'SideSheet',
                                                                                            props: {
                                                                                                title: 'Edit Link',
                                                                                                layout: [
                                                                                                    forms.project.links.thumbnail('root.root.link', `link-${ type }`),
                                                                                                    forms.project.links.edit('root.root.link', 'updateLink', `link-${ type }`, `${ type }`),
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
                                                                                                                                        _id: '$data.root.root.root.root.root._id',
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

                                    ],
                                },
                            },
                        },
                    ],
                },
            },
        },
    },
]);
