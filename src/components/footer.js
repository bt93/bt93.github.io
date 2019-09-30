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
      class="footer navbar navbar-fixed-bottom navbar-expand-sm navbar-light bg-light"
      style={{
        position: 'absolute',
        bottom: '-20%',
        width: '100%'
      }}
    >
			<div class="container float-left">
		  		<p>{siteTitle} {new Date().getFullYear()}</p>
		  	</div>
		  	<div class="float-right foot-text">
		  		<small>Made with 
                  <strong><span style={{color: '#563D7C'}}> Bootstrap</span></strong> and 
                  <strong><span style={{color: '#663399 '}}> Gatsby</span></strong>.</small>
		  		<div class="icons">
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
                        color: '#aaa'
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