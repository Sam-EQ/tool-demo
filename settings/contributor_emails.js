const ContributorEmails = {
    name: 'contributorEmails',
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
                        label: 'Contributor Emails',
                    },
                },
            },
        ],
    },
};

module.exports = ContributorEmails;
