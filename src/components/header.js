import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import *  as Icons from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle, tag, pageLinks }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id="navbarToggleExternalContent">
      <button
        onClick={() => setOpen(!open)}
        className="navbar-toggler"
        type="button" data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>
      <Collapse in={open}>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {pageLinks.map((page, i) => {
              return (
                <li className="nav-item" key={i}>
                  <Link to={page.path} className="nav-link">
                  {page.faIcon ? <FontAwesomeIcon icon={Icons[`${page.faIcon}`]} /> : ''} {page.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Collapse>
    </nav>
    <div className="jumbotron background">
          <div className="container" id="title">
            <h1 className="display-4">{siteTitle}</h1>
            <p className="lead">{tag}</p>
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
              <a href="https://www.linkedin.com/in/jason-robert-howie/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon 
                icon={faLinkedin} 
                size="lg"
                style={{
                  color: '#2867B2'
                }}
              />
              </a>
          </div>
        </div>
      </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
