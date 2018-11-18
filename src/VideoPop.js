import React, { Component } from 'react'
import './VideoPop.css'

class VideoPop extends Component {
  constructor(props) {
    super(props)

    this.handleClickClose = this.handleClickClose.bind(this)
  }

  handleClickClose() {
    this.props.onClose()
  }

  render() {
    return (
      <div className="video-pop">
        <div
          className="close-btn"
          onClick={ this.handleClickClose }>X</div>
        <div className="pop-inner">
          <iframe width="100%" height="100%" title="intro-video" src="https://www.youtube.com/embed/9bCIwbWt2T0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    )
  }
}

export default VideoPop