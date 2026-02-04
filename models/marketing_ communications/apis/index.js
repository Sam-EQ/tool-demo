const CreateMarketingCommunication = require('./create_marketing_communication');
const DeleteMarketingCommunication = require('./delete_marketing_communication');
const MarketingCommunications = require('./marketing_communications');
const UpdateMarketingCommunication = require('./update_marketing_communication');
const MarketingCommunicationsSearch = require('./marketing_communications_search');

const APIS = [
    CreateMarketingCommunication,
    DeleteMarketingCommunication,
    MarketingCommunications,
    UpdateMarketingCommunication,
    MarketingCommunicationsSearch,
];

module.exports = APIS;
