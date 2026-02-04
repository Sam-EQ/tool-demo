const forms = require('../../../forms');

module.exports = (path, type, title, field, formName) => ({
    Block: {
        rerender: {
            name: `${ type }-link`,
        },
        props: {
            journal: `$data.${ path }`,
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
                                    Block: {
                                        props: {
                                            styles: `
                                                display: flex;
                                                gap: 10px;
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
                                                    Tooltip: {
                                                        condition: {
                                                            operator: '===',
                                                            values: [`${ type }`, 'issuu'],
                                                        },
                                                        props: {
                                                            icon: 'info-circle',
                                                            type: 'light',
                                                            children: 'Issue Fullscreen Link',
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
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        // title: `Edit ${ title } Link`,
                                                                        title: [
                                                                            {
                                                                                Block: {
                                                                                    condition: {
                                                                                        operator: '===',
                                                                                        values: [`${ type }`, 'issuu'],
                                                                                    },
                                                                                    props: {
                                                                                        styles: `
                                                                                            display: flex;
                                                                                            gap: 10px;
                                                                                        `,
                                                                                        layout: [
                                                                                            {
                                                                                                H4: {
                                                                                                    props: {
                                                                                                        children: `Edit ${ title } Link`,
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                            {
                                                                                                Tooltip: {
                                                                                                    props: {
                                                                                                        icon: 'info-circle',
                                                                                                        type: 'light',
                                                                                                        children: 'Issue Fullscreen Link',
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        ],
                                                                                    },
                                                                                },
                                                                            },
                                                                            {
                                                                                H4: {
                                                                                    condition: {
                                                                                        operator: '!==',
                                                                                        values: [`${ type }`, 'issuu'],
                                                                                    },
                                                                                    props: {
                                                                                        children: `Edit ${ title } Link`,
                                                                                    },
                                                                                },
                                                                            },
                                                                        ],
                                                                        layout: [
                                                                            forms.embedLink.edit('root.root.root.root.journal', formName, field, `${ type }-link`),
                                                                        ],
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
                                                                                            formName,
                                                                                            onClick: {
                                                                                                action: 'form',
                                                                                                arguments: {
                                                                                                    type: 'submit',
                                                                                                    name: formName,
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
                    IFrame: {
                        condition: {
                            operator: 'notEmpty',
                            values: [`$data.root.journal.${ field }`],
                        },
                        props: {
                            styles: `
                                margin-top: 16px;
                            `,
                            title,
                            src: `$data.root.journal.${ field }`,
                            allowFullScreen: true,
                            width: '100%',
                            height: '600px',
                        },
                    },
                },
            ],
        },
    },
});
