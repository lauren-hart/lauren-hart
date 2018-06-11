import React from 'react'
// import { Link } from 'react-router-dom'

import About from './About'

class Home extends React.Component {
  render() {
    return (
      <div className='page-section'>

        <div className='page-heading-section'>
          <div className='page-title'>
            <h2>Welcome!</h2>
            <p>I'm</p>
            <p>emily coco</p>
            <p>a full stack web developer</p>
          </div>
        </div> {/*page-heading-section-END */}

        <About />

        {/*page-section-END */}
      </div>
    )
  }
}
export default Home