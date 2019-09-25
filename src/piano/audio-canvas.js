import React from 'react'
import './style.scss'

const WIDTH = 600
const HEIGHT = 150


class AudioCanvas extends React.Component {
  canvasRef
  audioRef

  canvasCtx
  audioCtx
  audioSource
  analyser



  constructor (props) {
    super(props)
    this.canvasRef = React.createRef(null)
    this.audioRef = React.createRef(null)
    this.audioCtx = new AudioContext()
  }

  componentDidMount() {
    this.ininAudioContext()
    const canvas = this.canvasRef.current
    const audio = this.audioRef.current
    audio.src = `${process.env.PUBLIC_URL}song.mp3`
    this.canvasCtx = canvas.getContext('2d')
    this.canvasCtx.lineWidth = 2
    this.canvasCtx.fillStyle = '#4285f4'


    this.audioSource = this.audioCtx.createMediaElementSource(audio)
    this.audioSource.connect(this.analyser)
    this.analyser.connect(this.audioCtx.destination)

    audio.addEventListener('play', this.playEvent.bind(this, this.canvasCtx, this.analyser))
    audio.addEventListener('pause', () => {
      console.log('stop')
    })
  }

  componentWillUnmount () {
    const audio = this.audioRef.current
    audio.removeEventListener( 'play', this.playEvent.bind( this, this.canvasCtx, this.analyser ))
  }

  ininAudioContext () {
    this.audioCtx = new AudioContext()
    this.analyser = this.audioCtx.createAnalyser()
    this.analyser.fftSize = 256
  }

  playEvent = ( canvasCtx, analyser ) => {
    this.draw(canvasCtx, analyser)
  }

  draw = ( canvasCtx, analyser ) => {
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT)
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array( bufferLength)
    analyser.getByteFrequencyData( dataArray )
    let barWidth = parseInt( .5 * WIDTH / bufferLength )
    let barHeight
    let x = 0
    for(let i=0; i<bufferLength; i++) {
      const value = dataArray[i]
      barHeight = parseInt(0.4 * value)
      canvasCtx.fillRect( x, HEIGHT - barHeight, barWidth, barHeight )
      x += barWidth + 3
    }
    
    requestAnimationFrame( this.draw.bind(this, canvasCtx, analyser) )
  }

  render () {
    return (
      <div className="audio-canvas-wrap">
        <canvas ref={ this.canvasRef } className="audio-canvas" width={ WIDTH } height={ HEIGHT }></canvas>
        <audio className="audio" ref={ this.audioRef } controls={ true } ></audio>
      </div>
    )
  }
}

export default AudioCanvas