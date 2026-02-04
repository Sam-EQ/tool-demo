const properties = require('./editproperties');

module.exports = (path, formName) => ({
    Form: {
        props: {
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName),
            submit: [properties.submit('UpdateToolkitArticle', `${ path }._id`, formName)],
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
                        name: 'meta',
                    },
                },
            ],
        },
    },
});
