const Awards = {
    type: 'query',
    name: 'Awards',
    spec: {
        use: 'v2',
        arguments: {
            type: 'object',
            required: [],
            additionalProperties: false,
            properties: {
                page: {
                    type: 'number',
                },
                size: {
                    type: 'number',
                },
                query: {
                    type: 'string',
                    default: '',
                },
            },
        },
        flows: [
            {
                use: 'service',
                name: 'read',
                service: 'mongodb',
                method: 'Read',
                spec: {
                    query: {
                        isDeleted: false,
                        $or: [
                            {
                                name: {
                                    $regex: '$data.arguments.query',
                                    $options: 'i',
                                },
                            },
                        ],
                    },
                    options: {
                        page: '$data.arguments.page',
                        size: '$data.arguments.size',
                    },
                },
            },
        ],
        result: {
            pagination: '$data.read.page_info',
            value: '$data.read.values',
        },
        document: '$data',
    },
};

module.exports = Awards;
