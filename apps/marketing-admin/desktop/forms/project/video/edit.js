const properties = require('./properties');

module.exports = (path, formName, rerenderName) => ({
    Form: {
        props: {
            isInline: false,
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName, path),
            submit: [properties.submit('UpdateToolkitArticle')],
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
