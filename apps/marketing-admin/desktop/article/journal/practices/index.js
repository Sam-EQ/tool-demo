const forms = require('../../../forms');
const loading = require('../../../../common/loading/tags');

module.exports = (path) => ({
    Block: {
        rerender: {
            name: 'practices',
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
                                            children: 'Areas of Practice',
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
            styles: `
                flex: 1;
                > .block{
                    margin-bottom:0;
                }
            `,
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                                display: flex;
                                justify-content: space-between;
                            `,
                            layout: [
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                        `,
                                            layout: [
                                                {
                                                    H4: {
                                                        props: {
                                                            children: 'Areas of Practice',
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
                                            layout: [
                                                {
                                                    TextButton: {
                                                        props: {
                                                            icon: 'pencil',
                                                            children: 'Edit',
                                                            onClick: {
                                                                action: 'open',
                                                                arguments: {
                                                                    element: 'SideSheet',
                                                                    props: {
                                                                        title: '',
                                                                        layout: [

                                                                            forms.project.practices.edit('root.root.root.root.project', 'updateProject', 'practices'),
                                                                        ],
                                                                        active: true,
                                                                        footer: {
                                                                            right: [
                                                                                {
                                                                                    Button: {
                                                                                        props: {
                                                                                            variants: ['medium', 'large', 'rounded', 'subtle'],
                                                                                            children: 'Cancel',
                                                                                            onClick: {
                                                                                                action: 'close',
                                                                                                arguments: {
                                                                                                    element: 'sideSheet',
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                {
                                                                                    FormButton: {
                                                                                        reducer: {
                                                                                            form: 'form',
                                                                                        },
                                                                                        props: {
                                                                                            variants: ['medium', 'large', 'rounded', 'primary'],
                                                                                            children: 'Submit',
                                                                                            formName: 'updateProject',
                                                                                            onClick: {
                                                                                                action: 'form',
                                                                                                arguments: {
                                                                                                    type: 'submit',
                                                                                                    name: 'updateProject',
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    },
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
                {
                    Block: {
                        props: {
                            journalBasics: '$data.root.project',
                            styles: `
                                display: flex;
                                justify-content: space-between;
                            `,
                            layout: [
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                            display: flex;
                                            justify-content: space-between;
                                            flex-direction:column;
                                        `,
                                            layout: [
                                                {
                                                    Block: {
                                                        props: {
                                                            styles: `
                                                                ul {
                                                                    margin: 12px -6px 0;
                                                                    flex: 100%;
                                                                    display: flex;
                                                                    flex-wrap: wrap;
                                                                }
                                                            `,
                                                            tags: '$data.root.root.journalBasics.practiceIds',
                                                            layout: [
                                                                {
                                                                    Tag: {
                                                                        condition: {
                                                                            operator: 'and',
                                                                            conditions: [
                                                                                {
                                                                                    operator: 'empty',
                                                                                    values: ['$data.root.tags'],
                                                                                },
                                                                                {
                                                                                    operator: '===',
                                                                                    values: ['$data.root.root.root.journalBasics.isGeneral', true],
                                                                                },
                                                                            ],
                                                                        },
                                                                        props: {
                                                                            label: 'General',
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    List: {
                                                                        condition: {
                                                                            operator: 'notEmpty',
                                                                            values: [
                                                                                '$data.root.tags',
                                                                            ],
                                                                        },
                                                                        props: {
                                                                            data: '$data.root.tags',
                                                                            item: {
                                                                                layout: [
                                                                                    {
                                                                                        Tag: {
                                                                                            props: {
                                                                                                label: '$data.root.name',
                                                                                                value: '$data.root._id',
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                ],
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
                    H4: {
                        props: {
                            styles: 'margin-top: 10px;',
                            children: 'Disciplines',
                        },
                    },
                },
                {
                    Block: {
                        props: {
                            journalBasics: '$data.root.project',
                            styles: `
                                display: flex;
                                justify-content: space-between;
                            `,
                            layout: [
                                {
                                    Block: {
                                        props: {
                                            styles: `
                                            display: flex;
                                            justify-content: space-between;
                                            flex-direction:column;
                                        `,
                                            layout: [
                                                {
                                                    Block: {
                                                        props: {
                                                            styles: `
                                                                ul {
                                                                    margin: 12px -6px 0;
                                                                    flex: 100%;
                                                                    display: flex;
                                                                    flex-wrap: wrap;
                                                                }
                                                            `,
                                                            tags: '$data.root.root.journalBasics.disciplines',
                                                            layout: [
                                                                {
                                                                    Tag: {
                                                                        condition: {
                                                                            operator: 'and',
                                                                            conditions: [
                                                                                {
                                                                                    operator: 'empty',
                                                                                    values: ['$data.root.tags'],
                                                                                },
                                                                                {
                                                                                    operator: '===',
                                                                                    values: ['$data.root.root.root.journalBasics.isGeneral', true],
                                                                                },
                                                                            ],
                                                                        },
                                                                        props: {
                                                                            label: 'General',
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    List: {
                                                                        condition: {
                                                                            operator: 'notEmpty',
                                                                            values: [
                                                                                '$data.root.tags',
                                                                            ],
                                                                        },
                                                                        props: {
                                                                            data: '$data.root.tags',
                                                                            item: {
                                                                                layout: [
                                                                                    {
                                                                                        Tag: {
                                                                                            props: {
                                                                                                label: '$data.root.value',
                                                                                                value: '$data.root.value',
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                ],
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
            ],
        },
    },
});
