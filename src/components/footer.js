import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTwitter,
    faGithub,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons'
import { 
faAt
} from '@fortawesome/free-solid-svg-icons'

export default ({ siteTitle }) => (
    <nav 
      className="footer navbar navbar-fixed-bottom navbar-expand-sm navbar-light bg-light"
    >
			<div className="container float-left">
		  		<p>{siteTitle} {new Date().getFullYear()}</p>
		  	</div>
		  	<div className="float-right foot-text">
		  		<small>Made with 
                  <strong> <span style={{color: '#563D7C'}}> 
                  <a
                    className="footer-link"
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bootstrap
                  </a></span></strong> and 
                  <strong> <span style={{color: '#663399 '}}> 
                  <a
                    className="footer-link"
                    href="https://www.gatsbyjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Gatsby
                  </a></span></strong>.</small>
		  		<div className="icons">
                  <a href="https://twitter.com/JSONHowie" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon 
                    icon={faTwitter} 
                    size="lg"
                    style={{
                      color: 'rgba(29,161,242,1.00)'
                    }}
                  />
                </a>
                <a href="https://github.com/bt93" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon 
                    icon={faGithub} 
                    size="lg"
                    style={{
                        color: 'black'
                    }}
                    />
                </a>
                <a href="https://www.linkedin.com/in/jason-howie-837ba36b/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon 
                    icon={faLinkedin} 
                    size="lg"
                    style={{
                        color: '#0077b5'
                    }}
                    />
                </a>
                <a href="mailto:contact@jasonrhowie.com">
                    <FontAwesomeIcon 
                        icon={faAt}
                        size="lg"
                        style={{
                            color: '#aaa'
                        }}
                    />
                </a>
		  	</div>
		  </div>
		</nav>
)