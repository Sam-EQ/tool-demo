module.exports = {
    countryId: {
        field: 'countryId',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
    personIds: {
        field: 'personIds',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
    regionalDirectorId: {
        field: 'regionalDirectorId',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
    },
    regionName: {
        field: 'regionName.keyword',
        type: 'terms',
        size: 500,
        order: {
            _key: 'asc',
        },
        filter: {
            bool: {
                must_not: [
                    { term: { 'regionName.keyword': '' } },
                ],
            },
        },
    },
};
