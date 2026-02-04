const ArticleStatus = require('./article_status');
const Contributors = require('./contributors');
const Keywords = require('./keywords');
const Practices = require('./practices');
const ResourceType = require('./resource_type');
const SubResourceType = require('./sub_resource_type');

const Facets = [
    ArticleStatus,
    Contributors,
    Keywords,
    Practices,
    ResourceType,
    SubResourceType,
];

module.exports = Facets;
