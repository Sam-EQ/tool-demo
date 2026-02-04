/* eslint-disable linebreak-style */
const card = require('./card');
const loading = require('./loading/card');

module.exports = [{
    LazyList: {
        props: {
            infiniteLoading: true,
            name: 'project-list',
            grid: {
                xxxl: 4,
                xxl: 4,
                xl: 3,
                lg: 3,
                md: 2,
                sm: 2,
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
                        ContainerFluid: {
                            props: {
                                grid: {
                                    xxxl: 4,
                                    xxl: 4,
                                    xl: 3,
                                    lg: 3,
                                    md: 2,
                                    sm: 2,
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
                > ul {
                    & + .block {
                        display: flex;
                    }
                    > li {
                        position: relative;
                        min-height: 132px;
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
                        > a {
                            text-decoration: none;
                            display: flex;
                            height: 100%;
                            .card {
                                overflow: hidden;
                            }
                            .context-menu {
                                z-index: 1;
                            }
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
                    }
                }
            `,
            item: {
                layout: [
                    card('root'),
                ],
            },
        },
    },
}];
