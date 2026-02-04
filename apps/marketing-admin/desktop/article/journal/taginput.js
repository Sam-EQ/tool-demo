const forms = require('../../forms');
const tagList = require('./tagList');
const loading = require('../../../common/loading/tags');

module.exports = ({
    title, rerenderName = '', formName, fieldName, path,
}) => ({
    Block: {
        rerender: {
            name: rerenderName,
            delay: 500,
        },
        skeleton: {
            layout: [
                {
                    Container: {
                        props: {
                            styles: `
                            padding: 0;
                            margin: 0;`,
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
                                    H4: {
                                        props: {
                                            children: 'Tags',
                                        },
                                    },
                                },
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                                margin-top: 12px;
                                            `,
                                            layout: [
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
        props: {
            project: `$data.${ path }`,
            styles: 'text-transform: capitalize;',
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                min-height: 18px;
                                .on-hover {
                                    > button {
                                        height: 18px;
                                        @media only screen and (max-width: 991px) {
                                            display: inline-flex;
                                        }
                                    }
                                }
                            `,
                            layout: [
                                {
                                    H4: {
                                        props: {
                                            children: title,
                                        },
                                    },
                                },
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                                display: flex;
                                                align-items: center;
                                                button {
                                                    i {
                                                        margin-right: 0;
                                                    }
                                                }
                                                > button {
                                                    margin-left: 10px;
                                                }
                                            `,
                                            className: 'on-hover',
                                            layout: [
                                                {
                                                    TextButton: {
                                                        reducer: {
                                                            form: 'form',
                                                        },
                                                        condition: {
                                                            operator: 'nin',
                                                            values: [
                                                                '$data.reducer.form.show',
                                                                formName,
                                                            ],
                                                        },
                                                        props: {
                                                            icon: 'pencil',
                                                            children: 'Edit',
                                                            onClick: {
                                                                action: 'form',
                                                                arguments: {
                                                                    type: 'open',
                                                                    name: formName,
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                {
                                                    Block: {
                                                        props: {
                                                            styles: `
                                                                display: flex;
                                                                flex-shrink: 0;
                                                                button {
                                                                    margin-left: 1.5625rem;
                                                                    i {
                                                                        font-size: 22px;
                                                                        font-weight: 500;
                                                                        height: 17px;
                                                                    }
                                                                }
                                                            `,
                                                            layout: [
                                                                {
                                                                    TextButton: {
                                                                        reducer: {
                                                                            form: 'form',
                                                                        },
                                                                        condition: {
                                                                            operator: 'in',
                                                                            values: [
                                                                                '$data.reducer.form.show',
                                                                                formName,
                                                                            ],
                                                                        },
                                                                        props: {
                                                                            icon: 'close',
                                                                            onClick: {
                                                                                action: 'form',
                                                                                arguments: {
                                                                                    type: 'close',
                                                                                    name: formName,
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                }, {
                                                                    TextButton: {
                                                                        reducer: {
                                                                            form: 'form',
                                                                        },
                                                                        condition: {
                                                                            operator: 'in',
                                                                            values: [
                                                                                '$data.reducer.form.show',
                                                                                formName,
                                                                            ],
                                                                        },
                                                                        props: {
                                                                            icon: 'check',
                                                                            onClick: {
                                                                                action: 'form',
                                                                                arguments: {
                                                                                    type: 'submit',
                                                                                    name: formName,
                                                                                },
                                                                            },
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
                {
                    Block: {
                        rerender: {
                            name: 'tags-rerender',
                        },
                        props: {
                            project: '$data.root.project',
                            layout: [
                                forms.project.taginput.edit('root.project', formName, tagList, rerenderName, fieldName),
                            ],
                        },
                    },
                },
            ],
        },
    },
});
