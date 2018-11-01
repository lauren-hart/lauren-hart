import React from 'react'
// import { Link } from 'react-router-dom'
import About from './About'
import Stack from './Stack'
import Experience from './Experience'
import Projects from './Projects'
import Header from './Header'
import Footer from './Footer'
import {Route, Switch} from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <About path='/about' component={About} />
          <Stack path='/stack' component={Stack} />
          <Experience path='/experience' component={Experience} />
          <Projects path='/projects' component={Projects} />
        </Switch>

        <Footer />
      </div>
    )
  }
}
export default Home
