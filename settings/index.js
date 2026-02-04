const BaseApi = require('./baseApi');
const ContributorEmails = require('./contributor_emails');
const FileApi = require('./fileApi');
const FlagAdminUsers = require('./flag_admin_users');
const Locations = require('./locations');
const MarketingToolkitAppId = require('./marketing_toolkit_app_id');
const PeopleAppId = require('./people_app_id');
const RegionalDirectors = require('./regional_directors');
const ShareUrlBase = require('./shareUrlBase');
const SubResourceType = require('./sub_resource_type');
const People = require('./People');
const Practice = require('./Practice');
const Practices = require('./Practices');
const ResourceJson = require('./ResourceJson');
const ResourceType = require('./ResourceType');
const Studio = require('./Studio');
const CompanyId = require('./company_id');

const Settings = [
    BaseApi,
    ContributorEmails,
    FileApi,
    FlagAdminUsers,
    Locations,
    MarketingToolkitAppId,
    PeopleAppId,
    RegionalDirectors,
    ShareUrlBase,
    SubResourceType,
    CompanyId,
].concat(People)
    .concat(Practice)
    .concat(Practices)
    .concat(ResourceJson)
    .concat(ResourceType)
    .concat(Studio);

module.exports = Settings;
