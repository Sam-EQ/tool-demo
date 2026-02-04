module.exports = {
    Block: {
        props: {
            className: 'form-group',
            styles: `
                display:flex;
                flex-direction: column;
                .skeleton {
                    width: 100%;
                    height: 36px;
                    border-radius: 5px;
                    &:not(:first-child) {
                        margin-top: 1.5rem;
                    }
                }
            `,
            layout: [
                {
                    Skeleton: {
                        props: {
                            className: 'form',
                            backgroundColor: '#f0f0f0',
                        },
                    },
                },
                {
                    Skeleton: {
                        props: {
                            className: 'form',
                            backgroundColor: '#f0f0f0',
                        },
                    },
                },
                {
                    Skeleton: {
                        props: {
                            className: 'form',
                            backgroundColor: '#f0f0f0',
                        },
                    },
                },
            ],
        },
    },
};
