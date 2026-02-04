const lightbox = require('./lightbox');
const forms = require('../../../forms');

module.exports = {
    Block: {
        props: {
            styles: `
            width: 100%;
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            .fab-action,
            button {
                i {
                    color: white;
                }
            }
            .fab-action {
                &:hover {
                    i {
                        color: black;
                    }
                }
                .confirmation-block {
                    i {
                        color: black;
                    }
                }
            }
        `,
            onClick: lightbox,
            iconfile: '$data.root',
            layout: [
                {
                    Block: {
                        props: {
                            as: 'figure',
                            styles: `
                                position: relative;
                                height: 200px;
                                > img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    max-width: 100%;
                                    flex-shrink: 0;
                                    border-radius: 15px;
                                }
                                &:before {
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    right: 0;
                                    top: 0;
                                    bottom: 0;
                                    z-index: 1;
                                    background-color: rgba(0,0,0,0.7);
                                    display: none;
                                    @media only screen and (max-width: 991px) {
                                        display: block;
                                    }
                                }
                            `,
                            layout: [
                                {
                                    Image: {
                                        condition: {
                                            operator: '===',
                                            values: [
                                                '$data.root.root.iconfile.type', 'Image',
                                            ],
                                        },
                                        props: {
                                            alt: '`$data.root.root.iconfile.title`',
                                            src: '`$data.app.settings.FileAPI.value`/download/`$data.root.root.iconfile._id`?size=480',
                                        },
                                    },
                                },
                                {
                                    Image: {
                                        condition: {
                                            operator: 'and',
                                            conditions: [
                                                {
                                                    operator: '!==',
                                                    values: [
                                                        '$data.root.root.iconfile.type', 'Image',
                                                    ],
                                                },
                                                {
                                                    operator: '===',
                                                    values: [
                                                        '$data.root.root.iconfile.type', 'Others',
                                                    ],
                                                },
                                                {
                                                    operator: '===',
                                                    values: [
                                                        '$data.root.root.iconfile.extension', '.potx',
                                                    ],
                                                },
                                            ],
                                        },
                                        props: {
                                            alt: '`$data.root.root.iconfile.title`',
                                            src: 'https://projecthub365-assets.s3.amazonaws.com/hub-ui/jpg/icons/480/ppt-480.jpg',
                                        },
                                    },
                                },
                                {
                                    Image: {
                                        condition: {
                                            operator: 'and',
                                            conditions: [
                                                {
                                                    operator: '!==',
                                                    values: [
                                                        '$data.root.root.iconfile.type', 'Image',
                                                    ],
                                                },
                                                {
                                                    operator: '!==',
                                                    values: [
                                                        '$data.root.root.iconfile.type', 'Others',
                                                    ],
                                                },
                                                {
                                                    operator: '!==',
                                                    values: [
                                                        '$data.root.root.iconfile.extension', '.potx',
                                                    ],
                                                },
                                            ],
                                        },
                                        props: {
                                            alt: '`$data.root.root.iconfile.title`',
                                            src: '`$data.app.settings.FileAPI.value`/thumbnail/`$data.root.root.iconfile._id`?size=480',
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
                                height: 100%;
                                justify-content: flex-end;
                                align-items: flex-start;
                                padding: 1rem;
                                position: absolute;
                                right: 0;
                                left: 0;
                                top: 0;
                                bottom: 0;
                                z-index: 1;
                                display: none;
                                i {
                                    color: white;
                                }
                                @media only screen and (max-width: 991px) {
                                    display: flex;
                                }
                            `,
                            className: 'on-hover',
                            iconfile: '$data.root.iconfile',
                            layout: [
                                {
                                    Block: {
                                        props: {
                                            styles: 'display:flex;flex-direction:row;justify-content:flex-end;',
                                            layout: [
                                                {
                                                    TextButton: {
                                                        props: {
                                                            styles: 'margin-right:10px',
                                                            icon: 'pen',
                                                            preventDefault: true,
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        title: 'Edit File',
                                                                        layout: [
                                                                            forms.additionalFiles.edit('root.root.root', 'editFileName'),
                                                                        ],
                                                                        footer: {
                                                                            left: [
                                                                                {
                                                                                    TextButton: {
                                                                                        props: {
                                                                                            variants: ['medium', 'large', 'rounded', 'primary'],
                                                                                            styles: `
                                                                                                color: #e53935;
                                                                                                i {
                                                                                                    &:before {
                                                                                                        color: #e53935;
                                                                                                    }
                                                                                                }
                                                                                                &:hover {
                                                                                                    color: #e53935;
                                                                                                    i {
                                                                                                        &:before {
                                                                                                            color: #e53935;
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            `,
                                                                                            children: 'Delete',
                                                                                            color: 'danger',
                                                                                            icon: 'trash',
                                                                                            onClick: {
                                                                                                action: 'API',
                                                                                                arguments: {
                                                                                                    request: {
                                                                                                        method: 'POST',
                                                                                                        url: '`$data.app.settings.baseAPI.value`/graph',
                                                                                                        withCredentials: true,
                                                                                                        data: {
                                                                                                            model: 'Files',
                                                                                                            type: 'mutation',
                                                                                                            mutation: 'DeleteFile',
                                                                                                            arguments: {
                                                                                                                _id: '$data.root.root.root.iconfile._id',
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                    onSuccess: [
                                                                                                        {
                                                                                                            action: 'rerender',
                                                                                                            arguments: {
                                                                                                                name: 'mediafiles',
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            action: 'close',
                                                                                                            arguments: {
                                                                                                                element: 'Sidesheet',
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
                                                                                            formName: 'editFileName',
                                                                                            onClick: {
                                                                                                action: 'form',
                                                                                                arguments: {
                                                                                                    type: 'submit',
                                                                                                    name: 'editFileName',
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
                                                    Download: {
                                                        condition: {
                                                            operator: 'notEmpty',
                                                            values: [
                                                                '$data.root.root.iconfile',
                                                            ],
                                                        },
                                                        props: {
                                                            icon: 'download',
                                                            styles: `
                                                            &.download {
                                                                display: flex;
                                                                align-items: center;
                                                                justify-content: center;
                                                                width: 22px;
                                                                margin: 0px 5px;
                                                                i {
                                                                    &:before {
                                                                        color: white;
                                                                    }
                                                                }
                                                            }
                                                            .spinner-block {
                                                                width: 22px;
                                                                height: 22px;
                                                                .spinner-semi-circle {
                                                                    width: 22px;
                                                                    height: 22px;
                                                                }
                                                                i {
                                                                    font-size: 15px;
                                                                }
                                                            }
                                                        `,
                                                            request: {
                                                                url: '`$data.app.settings.FileAPI.value`/download/`$data.root.root.iconfile._id`',
                                                                method: 'GET',
                                                                withCredentials: true,
                                                            },
                                                            name: '$data.root.root.iconfile.title',
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
                                            className: 'on-hover',
                                            styles: `
                                                position: absolute;
                                                display: none;
                                                flex-direction: column;
                                                left: 16px;
                                                bottom: 16px;
                                                z-index: 1;
                                                @media only screen and (max-width: 991px) {
                                                    display: flex;
                                                }
                                            `,
                                            layout: [
                                                {
                                                    Text: {
                                                        props: {
                                                            styles: `
                                                                color: white;
                                                            `,
                                                            size: 'medium',
                                                            fontWeight: 'medium',
                                                            children: '$data.root.root.iconfile.title',
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
};
