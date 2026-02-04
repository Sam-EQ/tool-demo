const list = require('./list');
const loading = require('./skeleton');

module.exports = (path) => ({
    Block: {
        props: {
            project: `$data.${ path }`,
            styles: `
            `,
            layout: [
                {
                    Block: {
                        data: {
                            iconslist: {
                                from: 'RESOLVE',
                                value:
                                {
                                    __RESOLVE: 'ARRAY',
                                    __PATH: '$data.root.project',
                                    __PIPELINE: [{
                                        function: {
                                            params: 'props',
                                            values: ['$data'],
                                            function: `
                                                var type = props.articleVideoType;
                                                var obj = {
                                                    fileId : props.articleVideoLink,
                                                    filetype: type
                                                }
                                                var response = [];
                                                if(type === 'File Upload'){
                                                    obj["fileId"] = props.articleVideoId
                                                }
                                                if(props.articleVideoType !== null && props.articleVideoType !== undefined
                                                     && props.articleVideoType !== ''){
                                                    response.push(obj);
                                                }
                                                return response;
                                            `,
                                        },
                                    }],
                                },
                            },
                        },

                        skeleton: {
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
                        props: {
                            styles: ` 
                                .container {
                                    padding: 0px;
                                }
                            `,
                            fileslist: '$data.iconslist',
                            layout: [
                                {
                                    H6:
                                    {
                                        condition: {
                                            operator: 'empty',
                                            values: [
                                                '$data.root.fileslist',
                                            ],
                                        },
                                        props: {
                                            styles: 'text-align:center;',
                                            children: 'No results found',
                                        },
                                    },
                                },
                                list,
                            ],
                        },
                    },
                },
            ],
        },
    },
});
