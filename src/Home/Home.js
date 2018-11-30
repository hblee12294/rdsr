import React, { Component } from 'react'
import './Home.css'

import Modal from '../Component/Modal'
import VideoPop from '../Component/VideoPop'

import img from '../images/upload/5a45a3ceea8ac.jpg'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoPopupOn: false
    }

    this.toggleVideoPopup = this.toggleVideoPopup.bind(this)
  }

  toggleVideoPopup() {
    this.setState(prevState => ({
      videoPopupOn: !prevState.videoPopupOn
    }))
  }

  render() {
    const styles = {
      backgroundImage: `url(${ img })`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }

    return (
      <div className="home">
        <div className="hero">
          <div className="background" style={ styles }/>
          <div className="content">
            <div className="content-raw">
              <p className="slogan">Drive future mobility</p>
            </div>
            <div className="content-raw">
              <button
                className="video-btn"
                onClick={ this.toggleVideoPopup }>Watch video</button>
            </div>
          </div>

          <Modal>
            <VideoPop
              onClose={ this.toggleVideoPopup }
              isOpen={ this.state.videoPopupOn }
            />
        </Modal>
        </div>
      </div>
    )
  }
}

export default Home