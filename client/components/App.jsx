import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Stack from './Stack'
import Experience from './Experience'
import Projects from './Projects'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <div>
            <Home path='/' component={Home} />
            <About path='/about' component={About} />
            <Stack path='/stack' component={Stack} />
            <Experience path='/experience' component={Experience} />
            <Projects path='/projects' component={Projects} />
          </div>
        </Switch>
      </div>
    )
  }
}

export default App
