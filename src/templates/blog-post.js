import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title="post" />
            <div className="container post">
                <h5>{post.frontmatter.title}</h5>
                <h6>{post.frontmatter.date}</h6>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            {/* <div class="container">
            discus
            </div> */}
            <div className="container">
                <p>
                Follow me on: <a 
                                href="https://twitter.com/JSONhowie" 
                                target="_blank"
                                rel="noopener noreferrer">Twitter</a><br/>
                Check out my: <a 
                                href="https://github.com/bt93" 
                                target="_blank"
                                rel="noopener noreferrer">GitHub</a><br/>
                Check out my: <a 
                                href="https://www.linkedin.com/in/jason-howie-837ba36b/" 
                                target="_blank"
                                rel="noopener noreferrer">LinkedIn</a><br/>
                Contact me at: <a href="mailto:contact@jasonrhowie.com">contact@jasonrhowie.com</a>
                </p>
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
        comments
        date(formatString: "dddd, MMMM YYYY")
      }
    }
  }
`
