import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <SEO title="Portfolio" />
        <h1>Portfolio</h1>
        <div className="row">
            {data.allFile.edges.map((project, i) => {
                return (
                    <div className="col-sm-6" key={i}>
                        <div className="card">
                            <img 
                                className="card-img-top portfolio"  
                                src={project.node.childMarkdownRemark.frontmatter.image.publicURL} 
                                alt={project.node.childMarkdownRemark.frontmatter.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{project.node.childMarkdownRemark.frontmatter.title}</h5>
                                <p className="card-text">{project.node.childMarkdownRemark.frontmatter.description}</p>
                                <p className="card-text"><small className="text-muted">Created: {project.node.childMarkdownRemark.frontmatter.date}</small></p>
                                <Link to={`/portfolio${project.node.childMarkdownRemark.fields.slug}`} className="btn btn-info">View Details</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </Layout>
)

export const query = graphql`
    query {
            allFile(sort: {order: DESC, fields: birthtime}, filter: {sourceInstanceName: {eq: "portfolio"}}) {
              edges {
                node {
                  childMarkdownRemark {
                    frontmatter {
                      date
                      description
                      image {
                        publicURL
                      }
                      title
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          }
        `