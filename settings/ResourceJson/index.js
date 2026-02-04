const ResourceJSON = {
    name: 'ResourceJSON',
    parent: 'com.hub365.marketingtoolkitadmin',
    value: [],
    spec: {
        input: {
            type: 'JSON',
            required: true,
        },
        edit: [
            {
                TextArea: {
                    props: {
                        required: true,
                        label: 'Resource Types',
                    },
                },
            },
        ],
    },
};

module.exports = ResourceJSON;
