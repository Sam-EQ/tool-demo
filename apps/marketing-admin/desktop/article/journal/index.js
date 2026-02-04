const abstract = require('./abstract');
const articleDescription = require('./description');
const keywords = require('./keywords');
const practices = require('./practices');
const authors = require('./authors');
const media = require('./additionalfiles');
const links = require('./links');
const additionallinks = require('./additionallinks');
const video = require('./video');
const embedLink = require('./embedLink');

module.exports = () => ({
    ContainerFluid: {
        rerender: {
            name: 'article_detail',
        },
        data: {
            journal: {
                from: 'API',
                request: {
                    url: '`$data.app.settings.baseAPI.value`/graph',
                    method: 'POST',
                    withCredentials: true,
                    data: {
                        model: '$data.app.models.ToolkitArticle',
                        type: 'query',
                        query: 'ToolkitArticle',
                        arguments: {
                            _id: '$data.router.params.articleId',
                        },
                        resolve: {
                            _id: true,
                            title: true,
                            resourceType: true,
                            updateFlag: true,
                            articleStatus: true,
                            topics: true,
                            subResource: true,
                            subResourceType: true,
                            description: true,
                            abstract: true,
                            descriptionText: true,
                            abstractText: true,
                            keywords: true,
                            thumbnailId: true,
                            practices: true,
                            practiceIds: true,
                            isGeneral: true,
                            isPinned: true,
                            contributorIds: true,
                            contributors: true,
                            originalLink: true,
                            otherLink: true,
                            bookmark: true,
                            allBookmarks: true,
                            associatedFiles: true,
                            articleVideoId: true,
                            articleVideoLink: true,
                            articleVideoType: true,
                            likesCount: true,
                            createdAt: true,
                            updatedAt: true,
                            flaggedById: true,
                            flaggedBy: true,
                            creator: true,
                            updatedBy: true,
                            miroLink: true,
                            issuuLink: true,
                            disciplines: true,
                        },
                    },
                },
            },
        },
        skeleton: {
            layout: [
                {
                    ContainerFluid: {
                        props: {
                            styles: `
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                margin-top: 2rem;
                                @media only screen and (max-width: 680px) {
                                    margin-top: 1.5rem;
                                }
                            `,
                            layout: [
                                {
                                    Spinner: {
                                        props: {
                                            styles: `
                                                transform: scale(2);
                                            `,
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
            journal: '$data.journal.value',
            layout: [
                {
                    Column: {
                        props: {
                            styles: `
                                > .card {
                                    &:not(:first-child) {
                                        margin-top: 1.5rem;
                                    }
                                }
                            `,
                            layout: [
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                abstract('root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                video('original', 'Video', 'root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                articleDescription('root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                practices('root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                keywords('root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                authors('root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                embedLink(
                                                    'root.root.root.journal',
                                                    'issuu',
                                                    'Issuu Embed',
                                                    'issuuLink',
                                                    'editIssuuLink',
                                                ),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                media('root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                links('original', 'Original File Location', 'root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                additionallinks('additional', 'Additional Resources', 'root.root.root.journal'),
                                            ],
                                        },
                                    },
                                },
                                {
                                    Card: {
                                        props: {
                                            layout: [
                                                embedLink(
                                                    'root.root.root.journal',
                                                    'miro',
                                                    'Miro Board',
                                                    'miroLink',
                                                    'editMiroLink',
                                                ),
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
    },
});
