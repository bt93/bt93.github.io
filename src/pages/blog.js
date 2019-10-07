import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => (
    <Layout>
        <SEO  title="Blog" />
        <h1>Blog</h1>
            <ul>
                {data.allFile.edges.map((post, i) => {
                    return (
                        <li className="blog-list" key={i}>
                            <h2>{post.node.childMarkdownRemark.frontmatter.title}</h2>
                            <small>{post.node.childMarkdownRemark.frontmatter.date}</small>
                            <p>{post.node.childMarkdownRemark.excerpt}</p>
                            <Link to={post.node.childMarkdownRemark.fields.postPath}>Read More</Link>
                        </li>
                    )
                })}
            </ul>
    </Layout>
)

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}, sort: {fields: birthtime, order: DESC}) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  date(formatString: "dddd, MMMM DD YYYY")
                  title
                }
                excerpt(format: PLAIN)
                fields {
                    postPath
                }
              }
            }
          }
        }
      }
`