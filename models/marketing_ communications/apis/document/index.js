module.exports = {
    _id: '$data._id',
    countryId: '$data.countryId',
    country: {
        from: 'HUB',
        request: {
            model: 'com.hub365.countries.models.Countries',
            type: 'query',
            query: 'Country',
            arguments: {
                _id: '$data.document.countryId',
            },
            resolve: {
                _id: true,
                name: true,
                shortName: true,
                color: true,
            },
        },
        value: '$data',
    },
    stateId: '$data.stateId',
    state: {
        from: 'HUB',
        request: {
            model: 'com.hub365.countries.models.State',
            type: 'query',
            query: 'State',
            arguments: {
                _id: '$data.document.stateId',
            },
            resolve: {
                _id: true,
                name: true,
                shortName: true,
                color: true,
            },
        },
        value: '$data',
    },
    personIds: {
        from: 'HUB',
        request: {
            model: 'com.hub365.people.models.People',
            type: 'query',
            query: 'FetchPeopleUsingIds',
            arguments: {
                ids: '$data.document.personIds',
            },
            resolve: {
                _id: true,
                avatarId: true,
                name: true,
                title: true,
                phones: true,
                primaryEmail: true,
                links: true,
                status: true,
                office: true,
            },
        },
        value: '$data',
    },
    regionalDirectorId: '$data.regionalDirectorId',
    regionalDirector: {
        from: 'HUB',
        request: {
            model: 'com.hub365.people.models.People',
            type: 'query',
            query: 'Person',
            arguments: {
                _id: '$data.document.regionalDirectorId',
            },
            resolve: {
                _id: true,
                avatarId: true,
                name: true,
                title: true,
                phones: true,
                primaryEmail: true,
                links: true,
                status: true,
                office: true,
            },
        },
        value: '$data',
    },
    regionName: '$data.regionName',
    geojson: '$data.geojson',
    countryName: '$data.countryName',
    stateName: '$data.stateName',
};
