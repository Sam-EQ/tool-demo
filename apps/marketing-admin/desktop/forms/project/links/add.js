const properties = require('./properties');

module.exports = (path, formName, rerenderName, type) => ({
    Form: {
        props: {
            isInline: false,
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName),
            submit: [properties.submit('CreateToolkitLink', `${ path }._id`, formName, type)],
            values: {},
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
                        name: rerenderName,
                    },
                },
            ],
        },
    },
});
