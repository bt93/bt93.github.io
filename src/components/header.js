import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { 
  faHome,
  faPortrait 
} from '@fortawesome/free-solid-svg-icons';

const Header = ({ siteTitle, tag }) => {
  const [open, setOpen] = useState(false)

  return (
    <header>
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
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  <FontAwesomeIcon icon={faPortrait} /> Portfolio
                </Link>
              </li>
              <li className="nav-item" style={{
                position: 'fixed',
                left: '92%'
              }}>
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
                    color: '#fff'
                  }}
                />
                </a>
              </li>
            </ul>
        </div>
      </Collapse>
    </nav>
    <div className="jumbotron background">
        <div className="container">
          <h1 className="display-4">{siteTitle}</h1>
          <p className="lead">{tag}</p>
        </div>
      </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
