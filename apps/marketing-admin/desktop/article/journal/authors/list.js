module.exports = [
    {
        LazyList: {
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
                styles: `
                    
                    padding-right: 0;
                    padding-left: 0;

                    ul {
                    li {
                        min-height: 120px;
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
                data: '$data.root.contributors',
                item: {
                    layout: [
                        {
                            Paper: {
                                props: {
                                    person: '$data.root',
                                    layout: [
                                        {
                                            Block: {
                                                props: {
                                                    person: '$data.root.person',
                                                    styles: `display:flex;
                                                    align-items:flex-start;
                                                    flex-direction:row;`,
                                                    layout: [
                                                        {
                                                            Avatar: {
                                                                condition: {
                                                                    operator: 'and',
                                                                    conditions: [
                                                                        {
                                                                            operator: 'notEmpty',
                                                                            values: [
                                                                                '$data.root.person.avatarId',
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                                props: {
                                                                    src: '`$data.app.settings.FileAPI.value`/thumbnail/`$data.root.person.avatarId`',
                                                                    alt: '`$data.root.person.name.first` `$data.root.person.name.last`',
                                                                    variants: ['large'],
                                                                    styles: '',
                                                                },
                                                            },
                                                        },
                                                        {
                                                            Avatar: {
                                                                condition: {
                                                                    operator: 'and',
                                                                    conditions: [
                                                                        {
                                                                            operator: 'empty',
                                                                            values: [
                                                                                '$data.root.person.avatarId',
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                                props: {
                                                                    src: '',
                                                                    alt: '`$data.root.person.name.first` `$data.root.person.name.last`',
                                                                    variants: ['large'],
                                                                    initials: true,
                                                                    styles: '',
                                                                },
                                                            },
                                                        },
                                                        {
                                                            Block: {
                                                                props: {
                                                                    styles: `display:flex;
                                                                    align-items:flex-start;
                                                                    flex-direction:column;
                                                                    margin-left:0.75rem`,
                                                                    layout: [
                                                                        {
                                                                            Text: {
                                                                                props: {
                                                                                    variants: ['medium'],
                                                                                    children: '`$data.root.root.person.name.first` `$data.root.root.person.name.last`',
                                                                                },
                                                                            },
                                                                        },

                                                                        {
                                                                            Text: {
                                                                                props: {
                                                                                    variants: ['regular'],
                                                                                    children: '`$data.root.root.person.office.name`',
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
                                    ],
                                },
                            },
                        },
                    ],
                },
            },
        },
    },
];
