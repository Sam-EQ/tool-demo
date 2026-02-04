const Contributors = {
    name: 'contributors',
    parent: 'com.hub365.marketingtoolkitadmin',
    definition: {
        flows: [
            {
                name: 'contributors',
                model: 'com.hub365.marketingtoolkitadmin.models.toolkitarticle',
                service: 'mongodb',
                method: 'aggregate',
                request: {
                    query: {
                        aggs: [
                            {
                                $match: {
                                    isDeleted: false,
                                },
                            },
                            {
                                $project: {
                                    contributors: true,
                                },
                            },
                            {
                                $unwind: '$contributors',
                            },

                            {
                                $group: {
                                    _id: '$contributors',
                                    count: {
                                        $sum: 1,
                                    },
                                },
                            },
                        ],
                    },
                },
            },
            {
                name: 'personIds',
                model: 'com.hub365.people.models.people',
                service: 'mongodb',
                method: 'aggregate',
                request: {
                    query: {
                        aggs: [
                            {
                                $match: {
                                    isDeleted: false,
                                    _id: {
                                        $in: {
                                            __RESOLVE: 'ARRAY',
                                            __PATH: '$data.stage.contributors._id',
                                            __PIPELINE: [
                                                {
                                                    map: 'ObjectId(`$data.each`)',
                                                },
                                            ],
                                        },
                                    },
                                },
                            },
                            {
                                $project: {
                                    _id: true,
                                    name: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
        list: '$data.personIds',
        item: {
            personId: '$data.item._id',
            name: '$data.item.name',
            count: {
                __RESOLVE: 'NUMBER',
                __PATH: '$data',
                __PIPELINE: [
                    {
                        filter: {
                            array: '$data.stage.contributors',
                            condition: {
                                operator: '===',
                                values: [
                                    '$data.each._id',
                                    '$data.item._id',
                                ],
                            },
                            replaceRoot: false,
                        },
                    },
                    {
                        select: '$data.0.count',
                    },
                ],
                __DEFAULT: 0,
            },
        },
    },
};
module.exports = Contributors;
