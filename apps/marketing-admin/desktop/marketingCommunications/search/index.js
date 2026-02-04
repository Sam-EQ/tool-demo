const data = require('./data');
const { table } = require('./views');
const forms = require('../../forms');
const filters = require('./filters');

module.exports = {
    Search: {
        rerender: {
            name: 'marketing-communications',
        },
        props: {
            styles: `
                > .container-fluid {
                    padding-top: 0;
                    > .tags-wrapper {
                        padding-left: 12px;
                        padding-right: 12px;
                        &:not(:empty) {
                            margin-bottom: 12px;
                        }
                        .clear-all,
                        .tags {
                            margin: 0 6px 12px;
                        }
                    }
                    .lazy-list-container {
                        padding-top: 0;
                    }
                    @media only screen and (max-width: 1440px) {
                        padding-left: 0;
                        padding-right: 0;
                    }
                }
            `,
            data,
            name: 'marketing-communications',
            syncUrlState: false,
            show: {
                search: true,
            },
            filters,
            header: {
                right: [
                    {
                        Button: {
                            props: {
                                children: 'Add Communications',
                                variants: ['regular', 'primary', 'rounded', 'medium'],
                                icon: 'plus',
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
                                    action: 'open',
                                    arguments: {
                                        element: 'SideSheet',
                                        props: {
                                            title: 'Add Communications',
                                            layout: [forms.marketingCommunication.add('addCommunication')],
                                            active: true,
                                            footer: {
                                                // left: [
                                                //     {
                                                //         TextButton: {
                                                //             reducer: {
                                                //                 form: 'form',
                                                //             },
                                                //             props: {
                                                //                 variants: ['large', 'medium', 'primary', 'rounded'],
                                                //                 styles: `
                                                //                     i {
                                                //                         width: 22px;
                                                //                         height: 22px;
                                                //                         border-radius: 50%;
                                                //                         border: 2px solid black;
                                                //                         display: flex;
                                                //                         align-items: center;
                                                //                         justify-content: center;
                                                //                     }
                                                //                 `,
                                                //                 icon: 'plus',
                                                //                 children: 'Add Communications',
                                                //                 onClick: {
                                                //                     action: 'form',
                                                //                     arguments: {
                                                //                         type: 'addFormField',
                                                //                         value: {
                                                //                             form: 'addCommunication',
                                                //                             field: 'Communications',
                                                //                         },
                                                //                     },
                                                //                 },
                                                //             },
                                                //         },
                                                //     },
                                                // ],
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
                                                                formName: 'addCommunication',
                                                                onClick: {
                                                                    action: 'form',
                                                                    arguments: {
                                                                        type: 'submit',
                                                                        name: 'addCommunication',
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
                left: [
                    {
                        H4: {
                            props: {
                                styles: '',
                                children: 'Marketing Communications',
                            },
                        },
                    },
                ],
            },
            default: {
                view: 'table',
                sortBy: [
                ],
            },
            sortBy: [],
            views: [
                {
                    name: 'table',
                    icon: 'grid-hub',
                    iconProps: {
                        type: 'custom',
                    },
                },
            ],
            layout: {
                table,
            },
        },
    },
};
