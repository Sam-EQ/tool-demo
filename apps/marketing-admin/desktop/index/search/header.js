/* eslint-disable linebreak-style */
const forms = require('../../forms');

module.exports = {
    right: [
        {
            Button: {
                props: {
                    children: 'Add Article',
                    variants: ['regular', 'medium', 'rounded', 'primary'],
                    icon: 'plus',
                    onClick: {
                        action: 'open',
                        arguments: {
                            element: 'SideSheet',
                            props: {
                                title: 'Create Article',
                                layout: [forms.project.add],
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
                                                    formName: 'createArticle',
                                                    onClick: {
                                                        action: 'form',
                                                        arguments: {
                                                            type: 'submit',
                                                            name: 'createArticle',
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
            Button: {
                condition: {
                    operator: 'in',
                    values: ['$data.app.roles', 'Marketing Communications Admin'],
                },
                props: {
                    icon: '',
                    children: 'Marketing Communications',
                    variants: ['regular', 'primary', 'rounded', 'medium'],
                    styles: `
                        &.icon {
                            @media only screen and (max-width: 991px) {
                                font-size: 0;
                                padding: 0;
                                width: 36px;
                                height: 36px;
                                align-items: center;
                                justify-content: center;
                                flex-shrink: 0;
                                i {
                                    position: relative;
                                    left: 1px;
                                    margin-right: 0;
                                }
                            }
                        }
                    `,
                    onClick: {
                        action: 'navigate',
                        arguments: {
                            url: '/`$data.router.params.app`/marketingCommunication',
                        },
                    },
                },
            },
        },
    ],
};
