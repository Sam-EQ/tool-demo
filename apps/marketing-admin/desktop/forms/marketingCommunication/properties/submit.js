const fields = {
    personIds: {
        __RESOLVE: 'ARRAY',
        __PATH: '$data.personIds.value',
        __DEFAULT: [],
    },
    countryId: '$data.countryId.value',
    stateId: '$data.stateId.value',
    countryName: '$data.countryId.label',
    stateName: {
        __RESOLVE: 'ANY',
        __PATH: '$data.stateId.label',
        __DEFAULT: '',
    },
    regionName: {
        __RESOLVE: 'ANY',
        __PATH: '$data.regionName.value',
        __DEFAULT: '',
    },
    regionalDirectorId: '$data.regionalDirectorId.value',
    geojson: '$data.geojson.value',
};
module.exports = (mutation, id, formName) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.MarketingCommunications',
        type: 'mutation',
        mutation,
        arguments: formName === 'editCommunication' ? {
            _id: `$data.${ id }`,
            ...fields,
        } : {
            ...fields,
        },
        resolve: {
            _id: true,
            personIds: true,
            countryId: true,
            country: true,
            state: true,
            stateId: true,
            geojson: true,
            regionName: true,
            regionalDirectorId: true,
            regionalDirector: true,
            countryName: true,
            stateName: true,
        },
    },
});
