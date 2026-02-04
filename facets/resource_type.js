const ResourceType = {
    name: 'resourceType',
    parent: 'com.hub365.marketingtoolkitadmin',
    definition: {
        flows: [
            {
                name: 'resourceType',
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
                                    resourceType: true,
                                },
                            },
                            {
                                $group: {
                                    _id: '$resourceType',
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
        list: '$data.resourceType',
        item: {
            name: '$data.item._id',
            count: '$data.item.count',
        },
    },
};
module.exports = ResourceType;
