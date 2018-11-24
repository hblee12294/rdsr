import React, { Component } from 'react'
import './Header.css'
import logo from '../images/logo2.png'

class Header extends Component {

  render() {
    return (
      <header>
        <div className="header-wrap">
          <a href="#" className="logo">
            <img id="header-logo" src={ logo } alt="logo-white"/>
          </a>
          <nav>
            <ul className="menu">
              <li className="menu-item"><a href="#">Home</a></li>
              <li className="menu-item"><a href="#">About</a></li>
              <li className="menu-item"><a href="#">News</a></li>
              <li className="menu-item"><a href="#">Campus</a></li>
              <li className="menu-item"><a href="#">Contact</a></li>
              <li className="menu-item career"><a href="#">Career</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header