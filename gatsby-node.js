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
        // const portSlug = createFilePath({ node, getNode, basePath: `portfolio` })
        // createNodeField({
        //     node,
        //     name: `slug`,
        //     value: portSlug
        // })

        const blogSlug = createFilePath({ node, getNode, basePath: `blog` })
        createNodeField({
            node,
            name: `slug`,
            value: blogSlug
        })

        const blogPostPath =  `/blog${node.fields.slug.replace(/-/g, "/")}`
        
        createNodeField({
            node,
            name: `postPath`,
            value: blogPostPath
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const portfolio = await graphql(`
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
    portfolio.data.allFile.edges.map(({ node }) => {
        createPage({
            path: `/portfolio${node.childMarkdownRemark.fields.slug}`,
            component: path.resolve(`./src/templates/project.js`),
            context: {
                slug: node.childMarkdownRemark.fields.slug
            }
        })
    })

    const blog = await graphql(`
        query {
            allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
              edges {
                node {
                  childMarkdownRemark {
                    fields {
                      slug
                      postPath
                    }
                  }
                }
              }
            }
          }
    `)
    blog.data.allFile.edges.map(({ node }) => {
        const blogPostPath =  `/blog${node.childMarkdownRemark.fields.slug.replace(/-/g, "/")}`

        createPage({
            path: blogPostPath,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                slug: node.childMarkdownRemark.fields.slug,
                postPath: blogPostPath
            }
        })
    })

    if (portfolio.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

      if (blog.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

    // create portfolio list pages
    const projects = portfolio.data.allFile.edges
    const postPerPage = 6
    const numPages = Math.ceil(projects.length / postPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
        path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
        component: path.resolve("./src/templates/portfolio.js"),
        context: {
            limit: postPerPage,
            skip: i * postPerPage,
            numPages,
            currentPage: i + 1,
        },
    }) 
})
}