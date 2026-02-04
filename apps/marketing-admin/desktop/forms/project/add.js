const properties = require('./properties');

module.exports = {
    Form: {
        props: {
            name: 'createArticle',
            fields: properties.fields(),
            layout: properties.layout('createArticle'),
            submit: [properties.submit('CreateToolkitArticle')],
            onSuccess: [
                {
                    action: 'navigate',
                    arguments: {
                        url: '$data.responses.0.value._id',
                    },
                },
                {
                    action: 'form',
                    arguments: {
                        type: 'reset',
                        name: 'createArticle',
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
};
