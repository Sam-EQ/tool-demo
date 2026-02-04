const properties = require('./properties');

module.exports = (path, formName, rerenderName, fieldName, settingName) => ({
    Form: {
        props: {
            isInline: false,
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName),
            submit: [properties.submit('UpdateToolkitArticle', `${ path }._id`, fieldName, path)],
            values: properties.values(path, fieldName),
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
                        definition: {
                            props: {
                                project: '$data.responses.0.value',
                            },
                        },
                    },
                },
            ],
        },
    },
});
