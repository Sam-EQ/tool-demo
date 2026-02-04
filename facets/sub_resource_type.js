const SubResourceType = {
    name: 'topics',
    parent: 'com.hub365.marketingtoolkitadmin',
    definition: {
        flows: [
            {
                name: 'topics',
                model: 'com.hub365.marketingtoolkitadmin.models.ToolkitArticle',
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
                                    _id: 1,
                                    topics: true,
                                },
                            },
                            {
                                $group: {
                                    _id: '$topics',
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
        list: '$data.topics',
        item: {
            name: '$data.item._id',
            count: '$data.item.count',
        },
    },
};
module.exports = SubResourceType;
