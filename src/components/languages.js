import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
  faGitAlt,
  faGithub,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons'
import { 
  faDatabase 
} from '@fortawesome/free-solid-svg-icons'

export default ({ dotNetLogo }) => (
    <div className="container" style={{textAlign: 'center'}}>
      <div className="row">
        <div className="col-sm">
          <img 
            src={dotNetLogo}
            alt=".NET Core"
            id="dotNetCore"
          />
          <p>C#/.NET</p>
        </div>
        <div className="col-sm">
          <FontAwesomeIcon 
          icon={faHtml5}
          size="5x"
          style={{color: '#F14A29'}}
          />
          <p>HTML5</p>
        </div>
        <div className="col-sm">
          <FontAwesomeIcon 
            icon={faCss3}
            size="5x"
            style={{color: '#264de4'}}
          />
          <p>CSS3</p>
        </div>
        <div className="col-sm">
          <FontAwesomeIcon 
          icon={faJs} 
          size="5x"
          style={{color: '#f0db4f'}}
          />
          <p>JavaScript</p>
        </div>
        <div className="col-sm">
          <FontAwesomeIcon 
          icon={faNodeJs} 
          size="5x"
          style={{color: '#68A063'}}
          />
          <p>Node.js</p>
        </div>
        <div className="col-sm">
          <FontAwesomeIcon 
          icon={faReact} 
          size="5x"
          style={{color: '#61dbfb'}}
          />
          <p>React.js</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
            <FontAwesomeIcon 
            icon={faGitAlt} 
            size="5x"
            style={{color: '#f1502f'}}
            />
            <FontAwesomeIcon 
            icon={faGithub} 
            size="5x"
            style={{color: '#211F1F'}}
            />
            <p>Git/GitHub</p>
        </div>
        <div className="col-sm">
          <FontAwesomeIcon 
          icon={faDatabase} 
          size="5x"
          />
          <p>SQL/Databases</p>
        </div>
        <div className="col-sm">
          <FontAwesomeIcon 
          icon={faBootstrap} 
          size="5x"
          style={{color: '#602C50'}}
          />
          <p>Bootstrap 4</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <h4>And More!</h4>
        </div>
      </div>
    </div>
)