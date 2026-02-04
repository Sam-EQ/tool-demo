/* eslint-disable linebreak-style */
module.exports = (path) => ({
    Block: {
        props: {
            carddetail: `$data.${ path }`,
            className: 'cardtitle',
            styles: `
                display: flex;
                flex-direction: column;
                height: 100%;
            `,
            layout: [
                {
                    Block: {
                        props: {
                            styles: `
                            `,
                            layout: [
                                {
                                    Text: {
                                        condition: {
                                            operator: 'notEmpty',
                                            values: [
                                                '$data.root.root.carddetail.resourceType',
                                            ],
                                        },
                                        props: {
                                            variants: ['secondary', 'medium'],
                                            styles: `
                                                display: flex;
                                                align-items: center;
                                                position: relative;
                                                font-size: 12px;
                                            `,
                                            children: '$data.root.root.carddetail.resourceType',
                                        },
                                    },
                                },
                                {
                                    Text: {
                                        props: {
                                            styles: `
                                                display: -webkit-box;
                                                -webkit-line-clamp: 3;
                                                -webkit-box-orient: vertical;
                                                overflow: hidden;
                                                position: relative;
                                                margin-top: 5px;
                                                line-height: 1.2;
                                                z-index: 1;
                                            `,
                                            variants: ['medium'],
                                            children: '$data.root.root.carddetail.title',
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                {
                    Block: {
                        props: {
                            styles: `
                                margin-top: auto;
                            `,
                            layout: [
                                {
                                    Text: {
                                        condition: {
                                            operator: 'notEmpty',
                                            values: [
                                                '$data.root.root.carddetail.articleStatus',
                                            ],
                                        },
                                        props: {
                                            styles: `
                                                display: flex;
                                                align-items: center;
                                                position: relative;
                                            `,
                                            variants: ['small', 'medium', 'secondary'],
                                            children: '$data.root.root.carddetail.articleStatus',
                                        },
                                    },
                                },
                                {
                                    Text: {
                                        condition: {
                                            operator: 'notEmpty',
                                            values: [
                                                '$data.root.root.carddetail.status',
                                            ],
                                        },
                                        props: {
                                            styles: `
                                                display: flex;
                                                align-items: center;
                                                position: relative;
                                            `,
                                            variants: ['small', 'medium', 'secondary'],
                                            children: '$data.root.root.carddetail.status',
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
