const properties = require('./properties');

module.exports = (path, formName) => ({
    Form: {
        props: {
            name: formName,
            fields: properties.editFields(),
            layout: properties.editLayout(formName),
            submit: [properties.submit('UpdateMarketingCommunication', `${ path }._id`, formName)],
            values: properties.values(path),
            onSuccess: [
                {
                    action: 'list',
                    arguments: {
                        type: 'update',
                        name: 'marketing-communications',
                        item: '$data.responses.0.value',
                        index: '$data.root.root.index',
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
