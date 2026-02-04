const Practices = {
    name: 'practices',
    parent: 'com.hub365.marketingtoolkitadmin',
    definition: {
        flows: [
            {
                name: 'practices',
                model: 'com.hub365.marketingtoolkitadmin.models.ToolkitArticle',
                service: 'mongodb',
                method: 'aggregate',
                request: {
                    query: {
                        aggs: [
                            {
                                $match: {
                                    isDeleted: false,
                                    practices: {
                                        $nin: [[], null],
                                    },
                                },
                            },
                            {
                                $project: {
                                    practices: true,
                                },
                            },
                            {
                                $unwind: '$practices',
                            },
                            {
                                $group: {
                                    _id: '$practices',
                                    count: {
                                        $sum: 1,
                                    },
                                },
                            },
                        ],
                    },
                },
            },
        ],
        list: '$data.practices',
        item: {
            name: '$data.item._id',
            count: '$data.item.count',
        },
    },
};
module.exports = Practices;
