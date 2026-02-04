const properties = require('./properties');

module.exports = (path, formName, field, rerender) => ({
    Form: {
        props: {
            name: formName,
            fields: properties.fields(field),
            layout: properties.layout(formName, field),
            submit: [properties.submit(path, field)],
            values: properties.values(path, field),
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
                        name: rerender,
                        definition: {
                            props: {
                                journal: '$data.responses.0.value',
                            },
                        },
                    },
                },
            ],
        },
    },
});
