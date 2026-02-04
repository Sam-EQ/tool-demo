const properties = require('./properties');

module.exports = (formName) => ({
    Form: {
        props: {
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName),
            submit: [properties.submit('CreateMarketingCommunication')],
            onSuccess: [
                {
                    action: 'rerender',
                    arguments: {
                        name: 'marketing-communications',
                    },
                },
                {
                    action: 'searchCount',
                    arguments: {
                        type: 'subtract',
                        name: 'marketing-communications',
                    },
                },
                {
                    action: 'close',
                    arguments: {
                        element: 'SideSheet',
                    },
                },
            ],
        },
    },
});
