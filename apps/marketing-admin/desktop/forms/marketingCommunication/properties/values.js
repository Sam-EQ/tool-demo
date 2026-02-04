module.exports = (path) => ({
    countryId: {
        label: `$data.${ path }.country.name`,
        value: `$data.${ path }.country._id`,
    },
    stateId: {
        label: `$data.${ path }.state.name`,
        value: `$data.${ path }.state._id`,
    },
    geojson: {
        label: `$data.${ path }.geojson`,
        value: `$data.${ path }.geojson`,
    },
    personIds: {
        __RESOLVE: 'ARRAY',
        __PATH: `$data.${ path }.personIds`,
        __PIPELINE: [
            {
                map: {
                    key: '$data.each._id',
                    label: '`$data.each.name.first` `$data.each.name.last`',
                    value: '$data.each._id',
                },
            },
        ],
        __DEFAULT: [],
    },
    regionName: {
        label: `$data.${ path }.regionName`,
        value: `$data.${ path }.regionName`,
    },
    regionalDirectorId: {
        __RESOLVE: 'ANY',
        __PATH: `$data.${ path }.regionalDirector`,
        __PIPELINE: [
            {
                function: {
                    params: 'props',
                    values: ['$data'],
                    function: `
                        return {
                            label: props.name.first + ' ' + props.name.last,
                            value: props._id
                        }
                    `,
                },
            },
        ],
        __DEFAULT: {
            label: '',
            value: '',
        },
    },
});
