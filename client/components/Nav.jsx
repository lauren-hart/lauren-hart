import React from 'react'
import {NavLink, ReactRouter} from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <ReactRouter>
        <div>
          <div className="nav row">
            <div className="col-md-4 about-nav nav-box">
              <NavLink to="/about"><button className="nav-button">about</button></NavLink>
            </div>
            <div className="col-md-4 experience-nav nav-box">
              <NavLink to="/experience"><button className="nav-button">experience</button></NavLink>
            </div>
            <div className="col-md-4 projects-nav nav-box">
              <NavLink to="/projects"><button className="nav-button">projects</button></NavLink>
            </div>
          </div>
        </div>
      </ReactRouter>
    )
  }
}
export default Nav
