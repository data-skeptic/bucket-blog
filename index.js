require("babel-core/register");
require("babel-polyfill");

const BucketBlog = require('./lib').default;

module.exports = BucketBlog;