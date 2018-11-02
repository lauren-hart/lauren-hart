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
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/stack' component={Stack} />
            <Route path='/experience' component={Experience} />
            <Route path='/projects' component={Projects} />
          </div>
        </Switch>
      </div>
    )
  }
}

export default App
