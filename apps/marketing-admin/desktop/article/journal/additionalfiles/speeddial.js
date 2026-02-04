module.exports = (path) => ({
    SpeedDial: {
        props: {
            styles: `
                position: absolute;
                right:  '42px';
                top: 16px;
                display: flex;
                @media only screen and (max-width: 991px) {
                    display: flex;
                }
                button{
                    margin-left:0;
                }
            `,
            list: [
                {
                    label: 'Delete',
                    icon: 'trash',
                    confirmation: 'Delete',
                    preventDefault: true,
                    onClick: {
                        action: 'api',
                        arguments: {
                            request: {
                                method: 'POST',
                                url: 'https://`$data.app.settings.baseAPI.value`/graph',
                                withCredentials: true,
                                data: {
                                    model: '$data.app.models.categoryIcons',
                                    type: 'mutation',
                                    mutation: 'deleteCategoryIcons',
                                    arguments: {
                                        query: {
                                            _id: `$data.${ path }._id`,
                                        },
                                    },
                                },
                            },
                            onSuccess: [{
                                action: 'list',
                                arguments: {
                                    type: 'remove',
                                    name: 'icon-list',
                                    index: '$data.root.root.root.root.index',
                                },
                            },
                            ],
                        },
                    },
                },
            ],
        },
    },
});
