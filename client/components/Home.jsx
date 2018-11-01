import React from 'react'
// import { Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import About from './About'
import Stack from './Stack'
import Experience from './Experience'
import Projects from './Projects'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Footer />
      </div>
    )
  }
}
export default Home
