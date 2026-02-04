const fields = () => ({
    isGeneral: '$data.isGeneral.value',
    disciplines: {
        __RESOLVE: 'ANY',
        __PATH: '$data',
        __PIPELINE: [
            {
                condition: [
                    {
                        operator: '!==',
                        values: ['$data.isGeneral.value', true],
                        return: '$data.disciplines.value',
                    },
                    [],
                ],
            },
        ],
        __DEFAULT: [],
    },
    practiceIds: {
        __RESOLVE: 'ANY',
        __PATH: '$data',
        __PIPELINE: [
            {
                condition: [
                    {
                        operator: '!==',
                        values: ['$data.isGeneral.value', true],
                        return: '$data.practices.value',
                    },
                    [],
                ],
            },
        ],
        __DEFAULT: [],
    },
});

module.exports = (mutation, id) => ({
    method: 'POST',
    url: '`$data.app.settings.baseAPI.value`/graph',
    withCredentials: true,
    data: {
        model: '$data.app.models.ToolkitArticle',
        type: 'mutation',
        mutation,
        arguments: {
            _id: `$data.${ id }`,
            ...fields(),
        },
        resolve: {
            _id: true,
            isGeneral: true,
            practices: true,
            practiceIds: true,
            disciplines: true,
        },
    },
});
