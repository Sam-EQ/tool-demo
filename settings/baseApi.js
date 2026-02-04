const BaseAPI = {
    name: 'baseAPI',
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
                        label: 'Base API',
                    },
                },
            },
        ],
    },
};

module.exports = BaseAPI;
