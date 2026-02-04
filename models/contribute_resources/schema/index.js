const Fields = require('./fields');
const ContributeResources = require('./contribute_resources');
const UpdateContributeResources = require('./update_contribute_resources');

module.exports = {
    Fields,
    Schema: ContributeResources,
    ContributeResources,
    UpdateSchema: UpdateContributeResources,
};
