const textInput = (formName, name, label) => ({
    TextInput: {
        props: {
            required: true,
            formName,
            name,
            label,
        },
    },
});

module.exports = (formName) => ([
    textInput(formName, 'title', 'File Name'),
]);
