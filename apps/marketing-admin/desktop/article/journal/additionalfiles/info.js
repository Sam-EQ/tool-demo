module.exports = {
    Block: {
        props: {
            styles: `
                > div {
                    &:not(:first-child) {
                        margin-top: 2rem;
                        @media only screen and (max-width: 680px) {
                            margin-top: 1.5rem;
                        }
                    }
                    h5 {
                        color: #909090;
                        & + * {
                            margin-top: 10px;
                        }
                        & + span {
                            display: block;
                        }
                    }
                }
            `,
            layout: [
                {
                    Block: {
                        props: {
                            layout: [
                                {
                                    H5: {
                                        props: {
                                            variants: ['medium'],
                                            children: 'File Name:',
                                        },
                                    },
                                }, {
                                    Text: {
                                        props: {
                                            children: '$data.root.root.root.name',
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    Block: {
                        props: {
                            layout: [
                                {
                                    H5: {
                                        props: {
                                            variants: ['medium'],
                                            children: 'File Size:',
                                        },
                                    },
                                }, {
                                    Text: {
                                        props: {
                                            children: '`$data.root.root.root.size` bytes',
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    Block: {
                        props: {
                            layout: [
                                {
                                    H5: {
                                        props: {
                                            variants: ['medium'],
                                            children: 'File Extension:',
                                        },
                                    },
                                }, {
                                    Text: {
                                        props: {
                                            children: '$data.root.root.root.extension',
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    Block: {
                        props: {
                            layout: [
                                {
                                    H5: {
                                        props: {
                                            variants: ['medium'],
                                            children: 'Uploaded By:',
                                        },
                                    },
                                }, {
                                    Block: {
                                        props: {
                                            styles: `
                                                display: flex;
                                                align-items: center;
                                                img,
                                                figure {
                                                    width: 24px;
                                                    height: 24px;
                                                    margin-right: 5px;
                                                }
                                            `,
                                            layout: [
                                                {
                                                    Avatar: {
                                                        props: {
                                                            src: '$data.root.root.root.root.creator.avatar',
                                                            alt: '`$data.root.root.root.root.creator.name.first` `$data.root.root.root.root.creator.name.last`',
                                                            size: 'small',
                                                            initials: true,
                                                        },
                                                    },
                                                }, {
                                                    Text: {
                                                        props: {
                                                            children: '`$data.root.root.root.root.creator.name.first` `$data.root.root.root.root.creator.name.last`',
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
                },
                {
                    Block: {
                        props: {
                            layout: [
                                {
                                    H5: {
                                        props: {
                                            variants: ['medium'],
                                            children: 'Upload Date:',
                                        },
                                    },
                                }, {
                                    Text: {
                                        data: {
                                            date: {
                                                from: 'RESOLVE',
                                                value: {
                                                    __RESOLVE: 'STRING',
                                                    __PATH: '$data',
                                                    __PIPELINE: [
                                                        {
                                                            date: {
                                                                locale: {
                                                                    language: 'en',
                                                                    spec: {
                                                                        relativeTime: {
                                                                            future: 'in %s',
                                                                            past: '%s ago',
                                                                            s: '1s',
                                                                            ss: '%ss',
                                                                            m: '1min',
                                                                            mm: '%dmin',
                                                                            h: '1h',
                                                                            hh: '%dh',
                                                                            d: '1d',
                                                                            dd: '%dd',
                                                                            M: '1m',
                                                                            MM: '%dm',
                                                                            y: '1y',
                                                                            yy: '%dy',
                                                                        },
                                                                    },
                                                                },
                                                                value: '$data.root.root.root.createdAt',
                                                                format: 'MMMM Do, YYYY',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        },
                                        props: {
                                            styles: `
                                                font-size: 16px;
                                            `,
                                            children: '$data.date',
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
