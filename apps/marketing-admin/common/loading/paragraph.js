module.exports = {
    Block: {
        props: {
            className: 'paragraph',
            styles: `
                > * {
                    border-radius: 10px;
                    &:not(:first-child) {
                        margin-top: 10px;
                    }
                }
            `,
            layout: [
                require('./fullLine'),
                {
                    Skeleton: {
                        props: {
                            backgroundColor: '#f0f0f0',
                            styles: `
                                height: 15px;
                                width: 90%;
                            `,
                        },
                    },
                },
                require('./halfLine'),
            ],
        },
    },
};
