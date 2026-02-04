/* eslint-disable linebreak-style */
const forms = require('../../../forms');

module.exports = {
    styles: `
    .lightbox-body {
        padding-top: 1.5rem;
    }
    `,
    item: {
        header: {
            title: 'Article Description',
            options: [
                {
                    type: 'layout',
                    layout: [
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
                {
                    type: 'layout',
                    layout: [
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
            ],
        },
        content: {
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                                height: 100%;
                                width: 100%;
                                padding: 1.25rem 0;
                                overflow: auto;
                            `,
                            layout: [
                                {
                                    Block: {
                                        props: {
                                            className: 'scrolling-container',
                                            styles: `
                                                height: 100%;
                                                width: 100%; 
                                                overflow: auto;
                                            `,
                                            layout: [
                                                {
                                                    Block: {
                                                        props: {
                                                            className: 'container-fluid',
                                                            styles: `
                                                .quill {
                                                    position: relative;
                                                    .ql-editor {
                                                        max-height: initial;
                                                    }
                                                    .ql-toolbar.ql-snow {
                                                        position: fixed;
                                                        top: 90px;
                                                        width: calc(100% - 2.25rem - 2.25rem);
                                                        background: #fff;
                                                        z-index: 1;
                                                        @media only screen and (max-width: 1440px) {
                                                            width: calc(100% - 1.5rem - 1.5rem);
                                                        }
                                                    }
                                                    .ql-container.ql-snow {
                                                        padding-top: 1.25rem;
                                                        @media only screen and (max-width: 991px) {
                                                            padding-top: 2.25rem;
                                                        }
                                                        @media only screen and (max-width: 680px) {
                                                            padding-top: 3.5rem;
                                                        }
                                                        @media only screen and (max-width: 420px) {
                                                            padding-top: 5rem;
                                                        }
                                                    }
                                                }
                                            `,
                                                            layout: [
                                                                forms.project.abstract.edit('root.root.root.root.root.root.root.project', 'updateProject', 'articleDescription', 'description'),
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
    onClose: [
        {
            action: 'form',
            arguments: {
                type: 'close',
                value: 'updateProject',
            },
        },
        {
            action: 'form',
            arguments: {
                type: 'reset',
                name: 'updateProject',
            },
        },
    ],
};
