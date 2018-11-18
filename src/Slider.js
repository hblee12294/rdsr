import React, { Component } from 'react'
import './Slider.css'
import img1 from './images/upload/5a45a3ceea8ac.jpg'
import img2 from './images/upload/5a45a3f215f2e.jpg'
import img3 from './images/upload/5a45a3fcc0a49.jpg'
import img4 from './images/upload/5a56ccaacf1e1.jpg'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        img1,
        img2,
        img3,
        img4
      ],
      currentIndex: 0,
      timeout: 4000
    }

    this.slide = this.slide.bind(this)
  }

  componentDidMount() {
    setTimeout(this.slide, this.state.timeout)
  }

  slide() {
    const { images } = this.state

    this.setState(prevState => {
      const index = prevState.currentIndex + 1

      return {
        currentIndex: index === images.length ? 0 : index
      }
    })

    setTimeout(this.slide, this.state.timeout)
  }

  render() {
    const { images, currentIndex } = this.state

    const slides = images.map((image, index) => {
      const styles = {
        backgroundImage: `url(${ image })`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }
      return (
        <div key={ index } className={ `slide ${ index === currentIndex ? 'show' : '' }` } style={ styles }></div>
      )
    })

    return (
      <div id="slider">
        <div className="background">
          { slides }
        </div>
        <div className="content">
          <div className="cnt-raw">
            <p className="slogan">Drive future mobility</p>
          </div>
          <div className="cnt-raw">
            <button className="video-btn">Watch video</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider