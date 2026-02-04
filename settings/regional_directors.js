const RegionalDirectors = {
    name: 'regionalDirectors',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'String',
        },
        edit: [
            {
                JSONEditor: {
                    props: {
                        required: true,
                        label: 'Region/Regional Directors',
                    },
                },
            },
        ],
    },
};

module.exports = RegionalDirectors;
