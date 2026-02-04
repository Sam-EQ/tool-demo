const textInput = (formName, name, label) => ({
    TextInput: {
        props: {
            required: `$data.root.fields.${ name }.required`,
            formName,
            name,
            label,
        },
    },
});
module.exports = (formName, path) => ([
    textInput(formName, 'title', 'Title'),
    textInput(formName, 'linkurl', 'Link'),
]);
