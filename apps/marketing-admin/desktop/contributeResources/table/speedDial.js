module.exports = (path) => ([{
    SpeedDial: {
        props: {
            styles: `
                display: flex; 
            `,
            moreSize: 3,
            list: [
                {
                    label: 'Info',
                    icon: 'info-circle',
                    preventDefault: true,
                    onClick: {
                        action: 'open',
                        arguments: {
                            element: 'Modal',
                            props: {
                                name: 'contentInfo',
                                title: `$data.${ path }.personName`,
                                styles: `
                                    .modal-block {
                                        max-width: 600px;
                                        .modal-footer {
                                            -webkit-box-pack: justify;
                                            justify-content: space-between;
                                            width: 100%;
                                            button {
                                                margin-top: 8px;
                                                width: calc(50% - 12px);
                                                justify-content: center;
                                            }
                                        }
                                    }
                                `,
                                layout: [
                                    {
                                        Block: {
                                            props: {
                                                styles: 'margin-top: 10px',
                                                layout: [
                                                    {
                                                        Paragraph: {
                                                            props: {
                                                                contentType: 'html',
                                                                showMore: true,
                                                                className: 'ql-editor',
                                                                children: `$data.root.root.${ path }.description`,
                                                            },
                                                        },
                                                    },
                                                    {
                                                        Block: {
                                                            props: {
                                                                styles: 'display: flex; margin-top: 10px;',
                                                                layout: [
                                                                    {
                                                                        H6: {
                                                                            props: {
                                                                                children: 'Studio :',
                                                                            },
                                                                        },
                                                                    },
                                                                    {
                                                                        Text: {
                                                                            props: {
                                                                                styles: 'margin-left: 10px;',
                                                                                children: `$data.root.root.root.${ path }.office.name`,
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
                                                                styles: 'display: flex; margin-top: 10px;',
                                                                layout: [
                                                                    {
                                                                        H6: {
                                                                            props: {
                                                                                children: 'Resource Type :',
                                                                            },
                                                                        },
                                                                    },
                                                                    {
                                                                        Text: {
                                                                            props: {
                                                                                styles: 'margin-left: 10px;',
                                                                                children: `$data.root.root.root.${ path }.resourceType`,
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
                                                                styles: 'display: flex; margin-top: 10px;',
                                                                layout: [
                                                                    {
                                                                        H6: {
                                                                            props: {
                                                                                children: 'Topic :',
                                                                            },
                                                                        },
                                                                    },
                                                                    {
                                                                        Text: {
                                                                            props: {
                                                                                styles: 'margin-left: 10px;',
                                                                                children: `$data.root.root.root.${ path }.topic`,
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
            ],
        },
    },
},
]);
