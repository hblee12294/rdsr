import React, { Component } from 'react'
import './Header.css'

import { NavLink, Link } from 'react-router-dom'

import logo from '../images/logo2.png'

class Header extends Component {

  render() {
    return (
      <header>
        <div className="header-wrap">
          <Link to="/" className="logo">
            <img id="header-logo" src={ logo } alt="logo-white"/>
          </Link>

          <nav>
            <ul className="menu">
              <li className="menu-item">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/news">News</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/campus">Campus</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header