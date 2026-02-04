const tags = require('../taginput');

module.exports = (path) => ({
    Block: {
        props: {
            layout: [
                tags({
                    title: 'Tags',
                    rerenderName: 'keywords',
                    formName: 'keywordsForm',
                    fieldName: 'keywords',
                    path: `root.${ path }`,
                }),
            ],
        },
    },
});
