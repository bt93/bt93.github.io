import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => (
    <Layout>
        <SEO  title="Blog" />
        <h1>Blog</h1>
            <ul>
                {data.allMarkdownRemark.edges.map((post, i) => {
                    return (
                        <li className="blog-list" key={i}>
                            <h2>{post.node.frontmatter.title}</h2>
                            <small>{post.node.frontmatter.date}</small>
                            <p>{post.node.excerpt}</p>
                            <Link to={post.node.fields.postPath}>Read More</Link>
                        </li>
                    )
                })}
            </ul>
    </Layout>
)

export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "blog"}}}) {
            edges {
              node {
                frontmatter {
                  date(formatString: "dddd, MMMM DD YYYY")
                  title
                }
                  excerpt
                fields {
                  postPath
                }
              }
            }
          }
      }
`