const forms = require('../../../../forms');

const header = {
    layout: [
        {
            Text: {
                props: {
                    variants: ['small', 'medium'],
                    children: '$data.root.column.name',
                },
            },
        },
    ],
};

module.exports = () => ([
    {
        name: 'Country',
        minWidth: 220,
        maxWidth: 380,
        accessor: '$data.country.name',
        Header: header,
    },
    {
        name: 'State',
        minWidth: 220,
        maxWidth: 380,
        accessor: '$data.state.name',
        Header: header,
    },
    {
        name: 'People',
        minWidth: 220,
        maxWidth: 600,
        Header: header,
        Cell: {
            layout: [
                {
                    List: {
                        props: {
                            data: '$data.root.original.personIds',
                            styles: `
                                display: flex;
                                li {
                                    position: relative; 
                                    margin-top: 8px;
                                    width: 100%;
                                }
                            `,
                            item: {
                                layout: [
                                    {
                                        Text: {
                                            condition: {
                                                operator: '===',
                                                values: ['$data.root._id', '$data.root.root.original.regionalDirectorId'],
                                            },
                                            props: {
                                                styles: `
                                                   color: #28BD20;
                                                `,
                                                children: '`$data.root.name.first` `$data.root.name.last`',
                                            },
                                        },
                                    },
                                    {
                                        Text: {
                                            condition: {
                                                operator: '!==',
                                                values: ['$data.root._id', '$data.root.root.original.regionalDirectorId'],
                                            },
                                            props: {
                                                children: '`$data.root.name.first` `$data.root.name.last`',
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
    {
        name: 'Region Name',
        minWidth: 220,
        maxWidth: 380,
        accessor: '$data.regionName',
        Header: header,
    },
    {
        name: '',
        minWidth: 100,
        maxWidth: 100,
        sortable: false,
        Header: header,
        Cell: {
            layout: [
                {
                    SpeedDial: {
                        props: {
                            styles: `
                            `,
                            list: [
                                {
                                    value: 'edit',
                                    icon: 'pen',
                                    onClick: {
                                        action: 'open',
                                        arguments: {
                                            element: 'SideSheet',
                                            props: {
                                                title: 'Edit Communication',
                                                layout: [forms.marketingCommunication.edit('root.root.original', 'editCommunication')],
                                                active: true,
                                                footer: {
                                                    right: [
                                                        {
                                                            TextButton: {
                                                                props: {
                                                                    size: 'large',
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
                                                                    size: 'large',
                                                                    children: 'Submit',
                                                                    formName: 'editCommunication',
                                                                    onClick: {
                                                                        action: 'form',
                                                                        arguments: {
                                                                            type: 'submit',
                                                                            name: 'editCommunication',
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
                                {
                                    icon: 'trash',
                                    value: 'delete',
                                    confirmation: 'Delete',
                                    preventDefault: true,
                                    onClick: {
                                        action: 'api',
                                        arguments: {
                                            request: {
                                                method: 'POST',
                                                url: '`$data.app.settings.baseAPI.value`/graph',
                                                withCredentials: true,
                                                data: {
                                                    model: '$data.app.models.MarketingCommunications',
                                                    type: 'mutation',
                                                    mutation: 'DeleteMarketingCommunication',
                                                    arguments: {
                                                        _id: '$data.root.original._id',
                                                    },
                                                },
                                            },
                                            onSuccess: [
                                                {
                                                    action: 'list',
                                                    arguments: {
                                                        type: 'remove',
                                                        name: 'marketing-communications',
                                                        index: '$data.root.index',
                                                    },
                                                },
                                                {
                                                    action: 'searchCount',
                                                    arguments: {
                                                        type: 'subtract',
                                                        name: 'marketing-communications',
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
]);
