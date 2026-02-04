const ArticleStatus = {
    name: 'articleStatus',
    parent: 'com.hub365.marketingtoolkitadmin',
    definition: {
        flows: [
            {
                name: 'articleStatus',
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
                                    articleStatus: true,
                                },
                            },
                            {
                                $group: {
                                    _id: '$articleStatus',
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
        list: '$data.articleStatus',
        item: {
            name: '$data.item._id',
            count: '$data.item.count',
        },
    },
};

module.exports = ArticleStatus;
