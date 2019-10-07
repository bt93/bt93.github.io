import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <SEO title="Portfolio" />
        <h1>Portfolio</h1>
        <div className="row">
            {data.allMarkdownRemark.edges.map((project, i) => {
                return (
                    <div className="col-sm-6" key={i}>
                        <div className="card">
                            <img 
                                className="card-img-top portfolio"  
                                src={project.node.frontmatter.image.publicURL} 
                                alt={project.node.frontmatter.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{project.node.frontmatter.title}</h5>
                                <p className="card-text">{project.node.frontmatter.description}</p>
                                <p className="card-text"><small className="text-muted">Created: {project.node.frontmatter.date}</small></p>
                                <Link to={`/portfolio${project.node.fields.slug}`} className="btn btn-info">View Details</Link>
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
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "portfolio"}}}) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM YYYY")
              title
              description
              image {
                publicURL
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `