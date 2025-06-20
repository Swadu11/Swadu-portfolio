import React from 'react'
import './Footer.css'
import user from '../../assets/user_icon.svg'

function Footer() {

  return (
    <div>
      <div id='footer' className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>SWADESHWAR K</h1>
                <p>I have a strong interest in front-end development, especially working with React. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="user_icon" />
                    <input type="email"  placeholder='Enter Your Email'/>
                </div>
                <div  className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
        <p className="footer-bottom-left">© {new Date().getFullYear()} Swadeshwar_K. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
