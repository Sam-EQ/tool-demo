module.exports = {
    interviewedPersonId: {
        field: 'interviewedPersonId',
        format: 'string',
        type: 'terms',
    },
    publicationDate: {
        field: 'publicationDate',
        type: 'range',
        format: 'date',
        operator: {
            min: 'gte',
            max: 'lte',
        },
    },
};
