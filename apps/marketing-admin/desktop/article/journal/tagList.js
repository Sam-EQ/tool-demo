module.exports = (path, fieldName) => ([{
    List: {
        data: {
            tags: {
                from: 'RESOLVE',
                value: {
                    __RESOLVE: 'ARRAY',
                    __PATH: `$data.${ path }`,
                    __PIPELINE: [{
                        function: {
                            params: 'a',
                            values: ['$data'],
                            function: `return a.${ fieldName } || [];`,
                        },
                    }],
                },
            },
        },
        condition: {
            operator: 'notEmpty',
            values: [
                '$data.tags',
            ],
        },
        props: {
            data: '$data.tags',
            styles: `
                flex: 100%;
                margin: 12px -6px 0;
            `,
            item: {
                layout: [

                    {
                        Block: {
                            props: {
                                styles: `
                                    cursor: pointer;
                                `,
                                onClick: {
                                    action: 'navigate',
                                    arguments: {
                                        url: '/`$data.router.params.app`?query=`$data.root.value`',
                                        newTab: true,
                                    },
                                },
                                layout: [
                                    {
                                        Tag: {
                                            props: {
                                                styles: `
                                                    cursor: pointer;
                                                `,
                                                label: '$data.root.root.value',
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
}]);
