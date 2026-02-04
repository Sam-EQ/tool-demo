const defaults = {
    left: [],
    right: [],
};

module.exports = ({
    title, layout, footer: { left, right } = defaults, toolTip,
}) => ({
    title,
    toolTip,
    layout,
    active: true,
    footer: {
        left: left || defaults.left,
        right: right || defaults.right,
    },
});
