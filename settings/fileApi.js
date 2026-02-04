const FileAPI = {
    name: 'FileAPI',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'String',
        },
        edit: [
            {
                TextInput: {
                    props: {
                        required: true,
                        label: 'File API',
                    },
                },
            },
        ],
    },
};

module.exports = FileAPI;
