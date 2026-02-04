const ContributeResource = require('./contribute_resource');
const ContributeResources = require('./contribute_resources');
const CreateResources = require('./create_resources');
const DeleteResources = require('./delete_resources');
const UpdateResources = require('./update_resources');
const SearchResources = require('./search_resources');

const APIS = [
    ContributeResource,
    ContributeResources,
    CreateResources,
    DeleteResources,
    UpdateResources,
].concat(SearchResources);

module.exports = APIS;
