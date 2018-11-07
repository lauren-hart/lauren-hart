import React from 'react'
// import {Link} from 'react-router-dom'
import Header from './Header'

class Contact extends React.Component {
  render () {
    return (
      <div>
        <Header />

        <div className="contact">

          <div className="col-md-6">

            <h3 className="contact-h3-1">Don't be a stranger </h3>
            <h3 className="contact-h3-2">Say Hello!</h3>

            <div className="contact-box">

              <div className="contact-details">
                <h4 className="contact-h4">email:</h4>
                <p className="contact-p">laurenannehart@gmail.com</p>
              </div>

              <div className="contact-details">
                <h4 className="contact-h4">mobile:</h4>
                <p className="contact-p">022 5033 055</p>
              </div>

              <div className="contact-details">
                <h4 className="contact-h4">LinkedIn:</h4>
                <a href="https://www.linkedin.com/in/lauren-hart-01551620/" className="contact-link">connect</a>
              </div>

              <div className="contact-details">
                <h4 className="contact-h4">github:</h4>
                <a href="https://github.com/lauren-hart" className="contact-link">check it out</a>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <img className="contact-img" src="./images/contact.jpg" />
          </div>

        </div>
      </div>
    )
  }
}
export default Contact
