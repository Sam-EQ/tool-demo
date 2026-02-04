const Fields = require('./fields');
const FirmwidePublications = require('./firmwide_publications');
const UpdateFirmwidePublications = require('./update_firmwide_publications');

module.exports = {
    Fields,
    Schema: FirmwidePublications,
    FirmwidePublications,
    UpdateSchema: UpdateFirmwidePublications,
};
