module.exports = {
    institution: {
        field: 'institution.keyword',
        type: 'terms',
        format: 'string',
    },
    month: {
        field: 'month.keyword',
        type: 'terms',
        format: 'string',
    },
    year: {
        field: 'year.keyword',
        type: 'terms',
        format: 'string',
    },
};
