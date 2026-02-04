const CreateToolkitArticle = require('./create_toolkit_article');
const UpdateToolkitArticle = require('./update_toolkit_article');
const DeleteToolkitArticle = require('./delete_toolkit_article');
const ToolkitArticle = require('./toolkit_article');
const ToolkitArticles = require('./toolkit_articles');
const ToolkitArticlesSearch = require('./ToolkitArticleSearch');

const APIS = [
    CreateToolkitArticle,
    UpdateToolkitArticle,
    DeleteToolkitArticle,
    ToolkitArticle,
    ToolkitArticles,
    ToolkitArticlesSearch,
];

module.exports = APIS;
