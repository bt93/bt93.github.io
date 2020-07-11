import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'

const Portfolio = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/portfolio/" : `/portfolio/${(currentPage - 1).toString()}`
  const nextPage = `/portfolio/${(currentPage + 1).toString()}`

  return (
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
          <nav aria-label="Page navigation" className="pag">
            <ul className="pagination">
              {!isFirst && (
                <li className="page-item">
                  <Link to={prevPage} className="page-link" rel="prev">Previous</Link>
                </li>
              )}
              {Array.from({ length: numPages }, (_, i) => {
                if (i === 0) {
                  return(
                    <li className={`page-item ${(i + 1 === currentPage ? 'active' : '')}`} key={`pagination-number${i + 1}`}>
                      <Link to={`/portfolio/`} className="page-link">{i + 1}</Link>
                    </li>
                  )
                } else if (i + 1 === currentPage) {
                  return (
                    <li className="page-item active" key={`pagination-number${i + 1}`}>
                      <p className="page-link">{i + 1}</p>
                    </li>
                  )
                } else {
                  return (
                    <li className="page-item" key={`pagination-number${i + 1}`}>
                      <Link to={`/portfolio/${i + 1}`} className="page-link">{i + 1}</Link>
                    </li>
                  )
                }
              })}
              {!isLast && (
                <li className="page-item">
                  <Link to={nextPage} className="page-link" rel="next">Next</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
    query($skip: Int!, $limit: Int!) {
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
        limit: $limit
        skip: $skip
        filter: {frontmatter: {type: {eq: "portfolio"}}}
        ) {
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