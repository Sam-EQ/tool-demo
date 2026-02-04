module.exports = (path) => ({
    innovationIncubator: {
        label: `$data.${ path }.innovationIncubator`,
        value: `$data.${ path }.innovationIncubator`,
    },
    lab: {
        key: `$data.${ path }.lab`,
        label: `$data.${ path }.lab`,
        value: `$data.${ path }.lab`,
    },
    isGeneral: {
        label: `$data.${ path }.isGeneral`,
        value: `$data.${ path }.isGeneral`,
    },
    practices: {
        __RESOLVE: 'ARRAY',
        __PATH: `$data.${ path }.practiceIds`,
        __PIPELINE: [
            {
                map: {
                    key: '$data.each._id',
                    label: '$data.each.name',
                    value: '$data.each._id',
                },
            },
        ],
    },
    disciplines: {
        __RESOLVE: 'ARRAY',
        __PATH: `$data.${ path }.disciplines`,
        __PIPELINE: [
            {
                map: {
                    key: '$data.each',
                    label: '$data.each',
                    value: '$data.each',
                },
            },
        ],
        __DEFAULT: [],
    },
});
