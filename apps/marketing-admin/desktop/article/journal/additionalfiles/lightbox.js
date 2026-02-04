const info = require('./info');

module.exports = {
    action: 'open',
    arguments: {
        element: 'Lightbox',
        props: {
            type: 'Carousel',
            data: '$data.root.root.fileslist',
            index: {
                path: '$data.root._id',
                key: {
                    __RESOLVE: 'ARRAY',
                    __PATH: '$data.data._id',
                    __DESTRUCTURE: true,
                },
            },
            item: {
                header: {
                    title: '$data.root.title',
                    options: [
                        {
                            icon: 'info-circle',
                            onClick: {
                                action: 'ToggleInfo',
                            },
                        }, {
                            type: 'layout',
                            layout: [
                                {
                                    Download: {
                                        props: {
                                            icon: 'download',
                                            request: {
                                                url: '`$data.app.settings.FileAPI.value`/download/`$data.root.current._id`',
                                                method: 'GET',
                                                withCredentials: true,
                                            },
                                            name: '$data.root.current.title',
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                content: {
                    layout: [
                        {
                            Block: {
                                props: {
                                    styles: `
                                    max-width: 100%;
                                    width: 100%;
                                    display: block;
                                    height: auto;
                                    object-fit: cover;
                                    min-height: 320px;
                                    background-color: #f0f0f0;
                                    background-image: url('');
                                    background-position: center;
                                    background-repeat: no-repeat;
                                    background-size: 50px;
                                `,
                                    as: 'figure',
                                    layout: [
                                        {
                                            Image: {
                                                condition: {
                                                    operator: '===',
                                                    values: [
                                                        '$data.root.root.type',
                                                        'Image',
                                                    ],
                                                },
                                                props: {
                                                    placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-common/svg/txt_white.svg',
                                                    src: '`$data.app.settings.FileAPI.value`/download/`$data.root.root._id`',
                                                },
                                            },
                                        },

                                        {
                                            PDF: {
                                                condition: {
                                                    operator: 'and',
                                                    conditions: [
                                                        {
                                                            operator: '===',
                                                            values: [
                                                                '$data.root.root.type', 'Document',
                                                            ],
                                                        },

                                                        {
                                                            operator: '===',
                                                            values: [
                                                                '$data.root.root.extension', '.pdf',
                                                            ],
                                                        },
                                                    ],
                                                },
                                                props: {
                                                    placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-common/svg/pdf_white.svg',
                                                    src: '`$data.app.settings.FileAPI.value`/download/`$data.root.root._id`',
                                                },
                                            },
                                        },
                                        {
                                            Video: {
                                                condition: {
                                                    operator: '===',
                                                    values: [
                                                        '$data.root.root.type', 'Video',
                                                    ],
                                                },
                                                props: {
                                                    placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-common/svg/docx_white.svg',
                                                    src: '`$data.app.settings.FileAPI.value`/download/\`$data.root.root._id\`',
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                    info: [
                        info,
                    ],
                },
            },
        },
    },
};
