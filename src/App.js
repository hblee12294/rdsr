import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './Home/Home'
import Header from './Component/Header'
import Slider from './Component/Slider'
import About from './Component/About'
import Technology from './Component/Technology'
import Footer from './Component/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={ Home } />
            <Route path="/about" component={ About } />

            <Header />
          </div>
        </Router>

        <Footer />
      </div>
    )
  }
}

export default App
