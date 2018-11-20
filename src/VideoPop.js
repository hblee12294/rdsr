import React, { Component } from 'react'
import './VideoPop.css'
import YouTube from 'react-youtube'

const videoId = '9bCIwbWt2T0'

class VideoPop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: null
    }

    this.handleClickClose = this.handleClickClose.bind(this)
    this.onPlayerReady = this.onPlayerReady.bind(this)
  }

  componentDidUpdate() {
    this.props.isOpen && this.state.player.playVideo()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.isOpen !== nextProps.isOpen
  }

  handleClickClose() {
    this.state.player.pauseVideo()
    this.props.onClose()
  }

  onPlayerReady(event) {
    this.setState({
      player: event.target
    })
  }

  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        showinfo: 0,
        rel: 0,
        autoplay: 0,
        fs: 0
      }
    }

    return (
      <div className={ `video-pop${ this.props.isOpen ? ' open' : '' }` }>
        <div
          className="close-btn"
          onClick={ this.handleClickClose }
        />
        <div className="pop-inner">
          <YouTube
            videoId={ videoId }
            opts={ opts }
            onReady={ this.onPlayerReady }
          />
        </div>
      </div>
    )
  }
}

export default VideoPop