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

module.exports = (formName) => ([
    textInput(formName, 'articleVideoLink', 'Link Url'),
]);
