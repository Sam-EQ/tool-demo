module.exports = {
    Block: {
        props: {
            styles: `
                > * {
                    border-radius: 10px;
                    &:not(:first-child) {
                        margin-top: 10px;
                    }
                }
            `,
            layout: [require('./fullLine'), require('./halfLine')],
        },
    },
};
