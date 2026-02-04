const Fields = require('./fields');
const MarketingCommunication = require('./marketing_communication');
const UpdateMarketingCommunication = require('./update_marketing_communication');

module.exports = {
    Fields,
    Schema: MarketingCommunication,
    MarketingCommunication,
    UpdateSchema: UpdateMarketingCommunication,
};
