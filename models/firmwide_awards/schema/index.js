const Fields = require('./fields');
const FirmwideAwards = require('./firmwide_awards');
const UpdateFirmwideAwards = require('./update_firmwide_awards');

module.exports = {
    Fields,
    Schema: FirmwideAwards,
    FirmwideAwards,
    UpdateSchema: UpdateFirmwideAwards,
};
