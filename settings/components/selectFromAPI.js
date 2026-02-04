module.exports = () => ({
    Select: {
        props: {
            manualSearch: true,
            none: false,
            allowSearch: true,
            data: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/meta?query=`$data.query`',
                    withCredentials: true,
                    method: 'GET',
                },
                list: {
                    __RESOLVE: 'ARRAY',
                    __PATH: '$data.request.value.values',
                    __PIPELINE: [
                        {
                            map: {
                                key: '$data.each._id',
                                label: '$data.each.name',
                                value: '$data.each._id',
                            },
                        },
                    ],
                },
            },
        },
    },
});
