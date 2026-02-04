/* eslint-disable linebreak-style */
module.exports = (path) => ({
    SpeedDial: {
        props: {
            styles: `
                opacity: 0;
                @media only screen and (max-width: 991px) {
                    opacity: 1;
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
                                url: '`$data.app.settings.baseAPI.value`/graph',
                                withCredentials: true,
                                data: {
                                    model: '$data.app.models.ToolkitArticle',
                                    type: 'mutation',
                                    mutation: 'DeleteToolkitArticle',
                                    arguments: {
                                        _id: `$data.${ path }._id`,
                                    },
                                },
                            },
                            onSuccess: [
                                {
                                    action: 'rerender',
                                    arguments: {
                                        name: 'card-list',
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
