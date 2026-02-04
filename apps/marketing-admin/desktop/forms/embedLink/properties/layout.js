const textInput = (formName, name, label) => ({
    TextInput: {
        props: {
            required: false,
            formName,
            name,
            label,
        },
    },
});

module.exports = (formName, field) => ([
    textInput(formName, field, 'iFrame Link'),
]);
