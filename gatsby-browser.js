/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const { registerLinkResolver, register404 } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/prismic/linkResolver');

registerLinkResolver(linkResolver);
register404(require('./src/pages/404'))