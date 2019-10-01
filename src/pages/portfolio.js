import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <SEO title="Portfolio" />
        <h1>Portfolio</h1>
        <div className="row">
            {data.allFile.nodes.map((project, i) => {
                return (
                    <div className="col-sm-6" key={i}>
                        <div className="card">
                            <img className="card-img-top portfolio"  src={project.childMarkdownRemark.frontmatter.image.publicURL} />
                            <div className="card-body">
                                <h5 className="card-title">{project.childMarkdownRemark.frontmatter.title}</h5>
                                <p className="card-text">{project.childMarkdownRemark.frontmatter.description}</p>
                                <p className="card-text"><small className="text-muted">Created: {project.childMarkdownRemark.frontmatter.date}</small></p>
                                <a className="btn btn-info">View Details</a>
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
        allFile(filter: {sourceInstanceName: {eq: "portfolio"}}, sort: {order: DESC, fields: birthtime}) {
            nodes {
              childMarkdownRemark {
                frontmatter {
                  date(formatString: "MMMM YYYY")
                  description
                  image {
                      publicURL
                  }
                  title
                }
              }
            }
          }
        }
`