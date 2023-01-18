import React, { Component } from 'react'
import './Footer.css'
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default class extends Component {
  render() {
    return (
      <div className="footer-body">
        <div className='footer-nav-links'>
          <h2 className='footer-headers'>Navigations</h2>
          <ul>
            <BrowserRouter>
            
            <Link to="#banner" className="no-underline" smooth><li className='footer-list'>Home</li ></Link>
            <Link to="#contact" className="no-underline" smooth><li className='footer-list'>contact</li ></Link>
            <Link to="#certification" className="no-underline" smooth><li className='footer-list'>Certifications</li ></Link>
            <Link to="#about" className="no-underline" smooth><li className='footer-list'>About</li ></Link>
            </BrowserRouter>
          </ul>
        </div>
        <div className='footer-logos'>
          <i class="fa-solid fa-user-tie common-class-footer icon-footer"></i>
          <h2 className="footer-navbar-logo common-class-footer">V|K|©</h2>

        </div>
        <div className='footer-technologies'>
          <h2 className='footer-headers'>Technologies Used</h2>
          <ul>
            <li className='footer-list'>React Js</li >
            <li className='footer-list'>Css</li >
            <li className='footer-list'>HTML</li >
            <li className='footer-list'>NPM Packages</li >
          </ul>
        </div>

      </div>
    )
  }
}
