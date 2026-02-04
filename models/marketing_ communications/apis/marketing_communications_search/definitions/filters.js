module.exports = {
    countryId: {
        field: 'countryId',
        format: 'string',
        type: 'terms',
    },
    personIds: {
        field: 'personIds',
        format: 'string',
        type: 'terms',
    },
    regionalDirectorId: {
        field: 'regionalDirectorId',
        format: 'string',
        type: 'terms',
    },
    regionName: {
        field: 'regionName.keyword',
        format: 'string',
        type: 'terms',
    },
};
