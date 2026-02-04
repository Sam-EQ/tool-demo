module.exports = {
    Block: {
        props: {
            className: 'tags',
            styles: `
            `,
            layout: [
                {
                    Block: {
                        props: {
                            className: 'tag-list',
                            styles: `
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                margin-left: -5px;
                                margin-right: -5px;
                                > * {
                                    margin-top: 10px;
                                    margin-left: 5px;
                                    margin-right: 5px;
                                }
                            `,
                            layout: [
                                require('./tag'),
                                require('./tag'),
                                require('./tag'),
                            ],
                        },
                    },
                },
            ],
        },
    },
};
