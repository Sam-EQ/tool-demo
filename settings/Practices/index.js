const Practices = {
    name: 'Practices',
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
                        addNewlabel: 'Add New Practice',
                        newSuggestion: {
                            enabled: true,
                        },
                    },
                },
            },
        ],
    },
};

module.exports = Practices;
