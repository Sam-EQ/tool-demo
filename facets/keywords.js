const Keywords = {
    name: 'keywords',
    parent: 'com.hub365.marketingtoolkitadmin',
    definition: {
        flows: [
            {
                name: 'keywords',
                model: 'com.hub365.marketingtoolkitadmin.models.ToolkitArticle',
                service: 'mongodb',
                method: 'aggregate',
                request: {
                    query: {
                        aggs: [
                            {
                                $match: {
                                    isDeleted: false,
                                    keywords: {
                                        $nin: [[], null],
                                    },
                                },
                            },
                            {
                                $project: {
                                    keywords: true,
                                },
                            },
                            {
                                $unwind: '$keywords',
                            },
                            {
                                $group: {
                                    _id: '$keywords',
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
        list: '$data.keywords',
        item: {
            name: '$data.item._id',
            count: '$data.item.count',
        },
    },
};
module.exports = Keywords;
