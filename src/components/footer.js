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

export default () => (
    <nav class="footer navbar navbar-fixed-bottom navbar-expand-sm navbar-light bg-light">
			<div class="container float-left">
		  		<p></p>
		  	</div>
		  	<div class="float-right foot-text">
		  		<p>Made with 
                  <strong><span style={{color: '#563D7C'}}> Bootstrap</span></strong> and 
                  <strong><span style={{color: '#663399 '}}> Gatsby</span></strong>.</p>
		  		<div class="icons">
                  <a href="https://twitter.com/JSONHowie" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon 
                    icon={faTwitter} 
                    size="2x"
                    style={{
                      color: 'rgba(29,161,242,1.00)'
                    }}
                  />
                </a>
                <a href="https://github.com/bt93" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon 
                    icon={faGithub} 
                    size="2x"
                    style={{
                        color: '#aaa'
                    }}
                    />
                </a>
                <a href="https://www.linkedin.com/in/jason-howie-837ba36b/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon 
                    icon={faLinkedin} 
                    size="2x"
                    style={{
                        color: '#0077b5'
                    }}
                    />
                </a>
                <a href="mailto:contact@jasonrhowie.com">
                    <FontAwesomeIcon 
                        icon={faAt}
                        size="2x"
                        style={{
                            color: '#aaa'
                        }}
                    />
                </a>
		  	</div>
		  </div>
		</nav>
)