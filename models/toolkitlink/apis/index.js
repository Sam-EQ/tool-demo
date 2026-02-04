const CreateToolkitLink = require('./create_toolkit_link');
const UpdateToolkitLink = require('./update_toolkit_link');
const DeleteToolkitLink = require('./delete_toolkit_link');
const ToolkitLink = require('./toolkit_link');
const ToolkitLinks = require('./toolkit_links');

const APIS = [
    CreateToolkitLink,
    UpdateToolkitLink,
    DeleteToolkitLink,
    ToolkitLink,
    ToolkitLinks,
];

module.exports = APIS;
