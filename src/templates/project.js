import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={`${post.frontmatter.title} | Portfolio`} />
      <div className="container">
        <h5>{post.frontmatter.title}</h5>
        <h6>Created {post.frontmatter.date}</h6>
        <p>{post.frontmatter.description}</p>
      </div>
      <div className="container">
        <img 
          src={post.frontmatter.image.publicURL} 
          className="img-fluid"
          alt={post.frontmatter.title}  
        />
      </div>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.frontmatter.live_url ? (
          <a href={post.frontmatter.live_url} target="_blank" rel="noopener noreferrer" class="btn btn-info">Live Demo</a>
        ) : (
          null
        )}
        <span><a href={post.frontmatter.github_url} target="_blank" rel="noopener noreferrer" class="btn btn-info">Github Repo</a></span>
	      <span><Link to="/portfolio/" class="btn btn-info">Back</Link></span>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        live_url
        github_url
        date
        description
        image {
            publicURL
        }
      }
    }
  }
`