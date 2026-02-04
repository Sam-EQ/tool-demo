const speedDial = require('./speedDial');

const header = {
    layout: [
        {
            Block: {
                props: {
                    children: '$data.root.column.name',
                },
            },
        },
    ],
};

module.exports = () => ([
    {
        name: 'Name',
        minWidth: 300,
        maxWidth: 350,
        accessor: '$data.personName',
        sortable: false,
        Header: header,
    },
    {
        name: 'Studio',
        minWidth: 300,
        maxWidth: 350,
        accessor: '`$data.office.name`',
        sortable: false,
        Header: header,
    },
    {
        name: 'Resource Type',
        minWidth: 300,
        maxWidth: 350,
        accessor: '$data.resourceType',
        sortable: false,
        Header: header,
    },
    {
        name: 'Topic',
        minWidth: 300,
        maxWidth: 350,
        accessor: '$data.topic',
        sortable: false,
        Header: header,
    },
    {
        name: '',
        minWidth: 300,
        maxWidth: 350,
        accessor: '',
        sortable: false,
        Header: header,
        Cell: {
            layout: [
                ...speedDial('root.original'),
            ],
        },
    },
]);
