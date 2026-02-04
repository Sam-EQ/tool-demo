const tagInput = (formName, name, label) => ({
    TagsInput: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
            addNewlabel: 'Add New Keyword',
            newSuggestion: {
                enabled: true,
            },
        },
    },
});

module.exports = (formName) => ([
    tagInput(formName, 'tags', ''),
]);
