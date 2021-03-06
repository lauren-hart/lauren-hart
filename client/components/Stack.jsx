import React from 'react'
// import { Link } from 'react-router-dom'

class Stack extends React.Component {
  render () {
    return (
      <section>
        <div className="row-stack">
          <ul className="stack-list">
            <h5 className="stack-h5">stack</h5>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>React.js</li>
            <li>Redux & <br />
          Redux Thunk</li>
            <li>Knex & SQlite3</li>
            <li>Webpack</li>
            <li>Jest & Test Driven <br />
          Development</li>
            <li>Enzyme</li>
            <li>API's</li>
            <li>Deployment</li>
            <li>VS Code</li>
            <li>Python</li>
          </ul>
          <img className="coffee" src="./images/coffee.jpeg" />
        </div>
      </section>
    )
  }
}
export default Stack
