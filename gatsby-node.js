/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

const { createPages } = require('gatsby-source-prismic-graphql');

exports.createPages = createPages(async ({graphql, actions}) => {

  const { createPrismicPage } = actions;

  const pages = await graphql(`
  query {
    prismic {
      allBlogposs {
        edges {
          node {
            _meta {
              uid
              lang
            }
            title
            body
          }
        }
      }
    }
  }
  `);

  pages.data.prismic.allBlogposs.edges.forEach(edge => {
    createPrismicPage({
      pattern: `/blogpost/:uid`,
      params: {
        uid: edge.node._meta.uid
      },
      component: path.resolve(path.join(__dirname, './src/components/blogpost.js')),
      context: {
        data: edge.node
      }
    });
  });

  const homepageResult = await graphql(`
  query {
    prismic {
      allHomepages {
        edges {
          node{
            title
          }
        }
      }
    }
  }`)

  const homepage = homepageResult.data.prismic.allHomepages.edges[0].node
  createPrismicPage({
    pattern: `/`,
    component: path.resolve(path.join(__dirname, './src/components/homepage.js')),
    context: {
      data: homepage
    }
  });
});
