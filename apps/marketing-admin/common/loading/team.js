module.exports = {
    Block: {
        props: {
            className: 'team',
            styles: `
                display: flex;
                align-items: center;
            `,
            layout: [
                require('./avatar'),
                {
                    Skeleton: {
                        props: {
                            backgroundColor: '#f0f0f0',
                            styles: `
                                width: 40%;
                                border-radius: 10px;
                                height: 15px;
                                margin-right: 30px;
                            `,
                        },
                    },
                },
                require('./tag'),
            ],
        },
    },
};
