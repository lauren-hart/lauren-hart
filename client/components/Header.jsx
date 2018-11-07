import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  componentDidMount () {
    this.props.path === '/' ? this.setState({
      selected: true
    }) : this.setState({
      selected: false
    })
  }

  render () {
    const butStyle = {
      background: 'white',
      color: '#8F8681'
    }
    const defaultStyle = {
      background: 'none',
      color: 'white'
    }

    return (
      <header className="header">
        <h1 className="name-h1">Lauren Hart</h1>
        <h5 className="title-h5">full stack developer</h5>
        <div className="row">
          <div className="links">
            <a href="mailto:laurenannehart@gmail.com" className="fa fa-envelope"></a>
            <a href="https://github.com/lauren-hart" className="fa fa-github"></a>
            <a href="https://www.linkedin.com/in/lauren-hart-01551620/" className="fa fa-linkedin"></a>
          </div>
        </div>

        <div className="nav row">

          {this.state.selected
            ? <div className="col-md-4 home-nav-selected nav-box">
              <Link to="/"><button>home</button></Link>
            </div>
            : <div className="col-md-4 home-nav nav-box">
              <Link to="/"><button>home</button></Link>
            </div>
          }

          {/* <div className="col-md-4 home-nav nav-box">
            <Link to="/"><button onClick={this.handleClick}
              style={this.props.path === '/'
                ? butStyle
                : defaultStyle}>home</button></Link>
          </div> */}

          <div className="col-md-4 contact-nav nav-box">
            <Link to="/contact"><button onClick={this.handleClick}
              className={this.state.contact
                ? 'nav-button-selected'
                : 'nav-button'}>contact</button></Link>
          </div>

          <div className="col-md-4 projects-nav nav-box">
            <Link to="/projects"><button onClick={this.handleClick}
              className={this.state.projects
                ? 'nav-button-selected'
                : 'nav-button'}>projects</button></Link>
          </div>

        </div>
      </header>
    )
  }
}

export default Header
