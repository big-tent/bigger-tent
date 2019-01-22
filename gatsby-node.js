const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve("src/templates/BlogPost.js"),
        context: {
          slug: node.slug
        }
      })
    })
  })
}
