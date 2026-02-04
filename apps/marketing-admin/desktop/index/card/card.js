/* eslint-disable linebreak-style */
const speedDial = require('./speedDial');
const details = require('./details');

module.exports = (path) => ({
    Card: {
        props: {
            carddetail: `$data.${ path }`,
            styles: `
                position: relative;
                padding: 0!important;
                overflow: hidden;
                border-radius: 10px;
                > * {
                    width: 100%;
                }
                a {
                    text-decoration: none;
                    height: 100%;
                    display: flex;
                    &:hover {
                        .context-menu {
                            opacity: 1;
                        }
                        .img-overlay {
                            &:before {
                                display: block;
                            }
                        }
                    }
                }
                `,
            layout: [
                {
                    Link: {
                        props: {
                            to: '/`$data.app._id`/`$data.root.carddetail._id`',
                            target: '_self',
                            layout: [
                                {
                                    Block: {
                                        props: {
                                            previewfile: '$data.root.root.carddetail.thumbnailId',
                                            as: 'figure',
                                            className: 'img-overlay',
                                            styles: `
                                            width: 120px;
                                            height: 120px;
                                            overflow: hidden;
                                            background-color: #f0f0f0;
                                            position: relative;
                                            img {
                                                display: block;
                                                width: 100%;
                                                height:100%;
                                                transform: scale(1.5);
                                            }
                                            &:before {
                                                content: '';
                                                position: absolute;
                                                left: 0;
                                                right: 0;
                                                top: 0;
                                                bottom: 0;
                                                z-index: 1;
                                                background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.4) 46%, rgb(0, 0, 0));
                                                opacity: 0.65;
                                                display: none;
                                                @media only screen and (max-width: 991px) {
                                                    display: block;
                                                }
                                            }
                                        `,
                                            layout: require('./cardimg'),
                                        },
                                    },
                                },
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                            display: flex;
                                            align-items: flex-start;
                                            justify-content: space-between;
                                            flex: 1;
                                            padding: 12px;
                                        `,
                                            layout: [
                                                details('root.root.root.carddetail'),
                                                speedDial('root.root.root.carddetail'),
                                            ],
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
});
