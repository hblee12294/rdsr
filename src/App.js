import React, { Component } from 'react'
import './App.css'

import Header from './Header'
import Slider from './Slider'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Slider />
        <Header />

      </div>
    )
  }
}

export default App
