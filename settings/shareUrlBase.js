const ShareUrlBase = {
    name: 'shareUrlBase',
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
                        label: 'Share Base API',
                    },
                },
            },
        ],
    },
};

module.exports = ShareUrlBase;
