import React, { Component } from 'react'
import './App.css'

import Header from './Component/Header'
import Slider from './Component/Slider'
import About from './About'
import Footer from './Component/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Slider />
        <About />
        <Footer />

        <Header />
      </div>
    )
  }
}

export default App
