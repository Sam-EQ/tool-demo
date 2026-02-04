const CreatePublication = require('./create_publication');
const CreatePublications = require('./create_publications');
const DeletePublication = require('./delete_publication');
const Publications = require('./publications');
const UpdatePublication = require('./update_publication');
const PublicationsSearch = require('./publications_search');

const APIS = [
    CreatePublication,
    CreatePublications,
    DeletePublication,
    Publications,
    UpdatePublication,
].concat(PublicationsSearch);

module.exports = APIS;
