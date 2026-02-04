module.exports = {
    Block: {
        props: {
            styles: `
            width: 100%;
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            .fab-action,
            button {
                i {
                    color: white;
                }
            }
            .fab-action {
                &:hover {
                    i {
                        color: black;
                    }
                }
                .confirmation-block {
                    i {
                        color: black;
                    }
                }
            }
        `,
            iconfile: '$data.root',
            layout: [
                {
                    Block: {
                        props: {
                            as: 'figure',
                            styles: `
                                position: relative; 
                                max-height: 200px;
                                @media only screen and (max-width: 991px) {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    max-height: unset;
                                }
                                > img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    max-width: 100%;
                                    flex-shrink: 0;
                                    border-radius: 15px;
                                }
                                &:before {
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    right: 0;
                                    top: 0;
                                    bottom: 0;
                                    z-index: 1;
                                    background-color: rgba(0,0,0,0.7);
                                    display: none;
                                }
                            `,
                            layout: [
                                {
                                    Video: {
                                        condition: {
                                            operator: '===',
                                            values: [
                                                '$data.root.root.iconfile.filetype', 'File Upload',
                                            ],
                                        },
                                        props: {
                                            styles: `
                                                max-height: 200px;
                                                border-radius: 15px;
                                            `,
                                            placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-common/svg/docx_white.svg',
                                            src: '`$data.app.settings.FileAPI.value`/download/`$data.root.root.iconfile.fileId`',
                                        },
                                    },
                                },

                                {
                                    IFrame: {
                                        condition: {
                                            operator: '!==',
                                            values: [
                                                '$data.root.root.iconfile.filetype', 'File Upload',
                                            ],
                                        },
                                        props: {
                                            styles: `
                                                max-height: 200px;
                                                border-radius: 15px;
                                            `,
                                            allowFullScreen: true,
                                            placeholder: 'https://projecthub365-assets.s3.amazonaws.com/hub-common/svg/docx_white.svg',
                                            src: '$data.root.root.iconfile.fileId',
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
    },
};
