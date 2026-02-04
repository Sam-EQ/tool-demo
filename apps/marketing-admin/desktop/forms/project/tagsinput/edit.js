const properties = require('./properties');

module.exports = (path, formName, readLayout, rerenderName, fieldName, settingName) => ({
    Form: {
        props: {
            styles: `
                .tag-picker {
                    margin-top: 12px;
                    margin-left: 0px;
                    margin-right: 0px;
                }
                .tag-group {
                    margin-top: 12px;
                    margin-left: -6px;
                    margin-right: -6px;
                    .tags {
                        margin-left: 6px;
                        margin-right: 6px;
                        margin-top: 12px;
                    }
                }
            `,
            isInline: true,
            name: formName,
            fields: properties.fields(),
            layout: properties.layout(formName),
            submit: [properties.submit('UpdateToolkitArticle', `${ path }._id`, fieldName, path)],
            values: properties.values(path, fieldName),
            readLayout: readLayout(`root.${ path }`, fieldName),
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
