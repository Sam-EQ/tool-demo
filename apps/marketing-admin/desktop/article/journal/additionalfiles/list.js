const card = require('./card');
const loading = require('../../../../common/loading');

module.exports = {
    LazyList: {
        condition: {
            operator: 'notEmpty',
            values: [
                '$data.root.fileslist',
            ],
        },
        props: {
            data: '$data.root.fileslist',
            name: 'media-list',
            grid: {
                xxxl: 5,
                xxl: 4,
                xl: 4,
                lg: 3,
                md: 3,
                sm: 3,
                xs: 2,
                xxs: 2,
                xxxs: 1,
            },
            responsive: {
                xxxl: 1,
                xxl: 1,
                xl: 1,
                lg: 1,
                md: 1,
                sm: 1,
                xs: 1,
                xxs: 1,
                xxxs: 1,
            },
            loadingSkeleton: {
                styles: '',
                layout: [
                    {
                        Container: {
                            props: {
                                grid: {
                                    xxxl: 5,
                                    xxl: 4,
                                    xl: 4,
                                    lg: 3,
                                    md: 3,
                                    sm: 3,
                                    xs: 2,
                                    xxs: 2,
                                    xxxs: 1,
                                },
                                layout: [
                                    {
                                        Row: {
                                            props: {
                                                layout: [
                                                    loading,
                                                    loading,
                                                    loading,
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
            styles: `
            padding-top: 24px;
            padding-right: 0;
            padding-left: 0;
            ul {
            li {
                min-height: 200px;
                &:empty {
                    &:before {
                        content: '';
                        position: absolute;
                        top: 16px;
                        bottom: 0;
                        left: 16px;
                        right: 16px;
                        overflow: hidden;
                        background-color: white;
                        border-radius: 10px;
                        box-shadow: 0 1px 4px 1px rgba(0,0,0,0.1);
                    }
                }
                > .block {
                    .on-hover {
                        display: none;
                        @media only screen and (max-width: 991px) {
                            display: flex;
                        }
                        .block {
                            .text-button {
                                @media only screen and (max-width: 991px) {
                                    i {
                                        color: black;
                                    }
                                }
                                   
                                &:hover {
                                     i {
                                        color: black;
                                    }
                                }
                            }
                            .download {
                                .text-button {
                                    @media only screen and (max-width: 991px) {
                                        i {
                                            color: black;
                                            &:before {
                                                color: black;
                                            }
                                        }
                                    }
                                    &:hover {
                                        i {
                                            color: black;
                                            &:before {
                                                color: black;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &:hover {
                        .on-hover {
                            display: flex;
                        }
                        figure {
                            &:before {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
        `,
            item: {
                layout: [
                    card,
                ],
            },
        },
    },
};
