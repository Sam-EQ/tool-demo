module.exports = {
    createdAt: {
        field: 'createdAt',
    },
    name: {
        field: 'name.keyword',
    },
    institution: {
        field: 'institution.keyword',
    },
    year: {
        field: 'year.keyword',
    },
};
