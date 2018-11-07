import React from 'react'
// import {Link} from 'react-router-dom'
import About from './About'
import Experience from './Experience'
import Stack from './Stack'
import Header from './Header'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <Stack />
        <Experience />

      </div>

    )
  }
}
export default Home
