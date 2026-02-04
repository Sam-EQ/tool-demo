const Awards = require('./awards');
const CreateAward = require('./create_award');
const CreateAwards = require('./create_awards');
const DeleteAward = require('./delete_award');
const UpdateAward = require('./update_award');
const AwardsSearch = require('./awards_search');

const APIS = [
    Awards,
    CreateAward,
    CreateAwards,
    DeleteAward,
    UpdateAward,
].concat(AwardsSearch);

module.exports = APIS;
