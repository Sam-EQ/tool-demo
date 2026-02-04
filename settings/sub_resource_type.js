const SubResourceType = {
    name: 'subResourceType',
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
                        addNewlabel: 'Add New Sub Resource Type',
                        newSuggestion: {
                            enabled: true,
                        },
                    },
                },
            },
        ],
    },
};

module.exports = SubResourceType;
