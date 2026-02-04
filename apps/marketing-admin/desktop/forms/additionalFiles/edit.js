const properties = require('./properties');

module.exports = (path, formName) => ({
    Form: {
        props: {
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName),
            submit: [properties.submit(path)],
            values: properties.values(path),
            onSuccess: [
                {
                    action: 'close',
                    arguments: {
                        element: 'SideSheet',
                    },
                },
                {
                    action: 'rerender',
                    arguments: {
                        name: 'mediafiles',
                    },
                },
            ],
        },
    },
});
