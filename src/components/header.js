import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Collapse } from 'react-bootstrap'

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  return (
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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
        </ul>
      </div>
    </Collapse>
  </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
