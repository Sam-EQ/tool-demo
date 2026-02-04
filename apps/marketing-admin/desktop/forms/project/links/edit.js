const properties = require('./properties');

module.exports = (path, formName, rerenderName, type) => ({
    Form: {
        props: {
            isInline: false,
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName, path),
            submit: [properties.submit('UpdateToolkitLink', `${ path }._id`, formName, type)],
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
                        name: rerenderName,
                    },
                },
            ],
        },
    },
});
