/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `portfolio` })
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allFile(filter: {sourceInstanceName: {eq: "portfolio"}}) {
                edges {
                    node {
                        childMarkdownRemark {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        }
    `)
    result.data.allFile.edges.map(({ node }) => {
        createPage({
            path: `/portfolio${node.childMarkdownRemark.fields.slug}`,
            component: path.resolve(`./src/templates/project.js`),
            context: {
                slug: node.childMarkdownRemark.fields.slug
            }
        })
    })
}