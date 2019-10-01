import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <SEO title="Portfolio" />
        <h1>Portfolio</h1>
        {data.allFile.nodes.map((project, i) => {
            return (
                <div className="row" key={i}>
                    <div className="col-sm-6">
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
                </div>
            )
        })}
    </Layout>
)

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "portfolio"}}) {
            nodes {
              childMarkdownRemark {
                frontmatter {
                  date(formatString: "MMMM YYYY")
                  description
                  github_url
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