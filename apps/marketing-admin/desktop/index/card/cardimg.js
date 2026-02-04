module.exports = [
    {
        Image: {
            condition: {
                operator: 'notEmpty',
                values: ['$data.root.previewfile'],
            },
            props: {
                placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-ui/svg/Marketing-toolkit-default-icon.svg',
                src: '`$data.app.settings.FileAPI.value`/thumbnail/`$data.root.previewfile`',
            },
        },
    },
    {
        Image: {
            condition: {
                operator: 'empty',
                values: ['$data.root.previewfile'],
            },
            props: {
                placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-ui/svg/Marketing-toolkit-default-icon.svg',
            },
        },
    },
];
