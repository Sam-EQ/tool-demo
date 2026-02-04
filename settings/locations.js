const Locations = {
    name: 'locations',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'Array',
        },
        edit: [
            {
                TagsInput: {
                    props: {
                        required: true,
                        addNewlabel: 'Add new location',
                        newSuggestion: {
                            enabled: true,
                        },
                    },
                },
            },
        ],
    },
};

module.exports = Locations;
