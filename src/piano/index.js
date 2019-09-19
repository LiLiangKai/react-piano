import React, { PureComponent } from 'react'
import { sleep } from './utils'
import SONGS from './songs'
import './style.css'

const VOICE_MAP = {
  0: [261.63, 293.67, 329.63, 349.23, 391.99, 440, 493.88],
  1: [523.25, 587.33, 659.26, 698.46, 783.99, 880, 987.77],
  2: [1046.5, 1174.66, 1318.51, 1396.92, 1567.98, 1760, 1975.52]
}

const KEYCODE_MAP = {
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7
}

export default class Piano extends PureComponent {
  audioCtx = null // 音频上下文
  gainNode = null // 音量控制对象
  oscillator = null // 音调控制对象
  highTone = false  // 高音
  lowTone = false   // 低音
  state = {
    curKey: -1,
    level: 1 // 高音2，中音1，低音0
  }

  constructor(props) {
    super(props)
    this.audioCtx = new AudioContext()
    this.level = 1
  }

  componentDidMount() {
    // 监听键盘事件
    window.addEventListener('keydown', this.handleKeydown.bind(this))
    window.addEventListener('keyup', this.handleKeyup.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
    window.removeEventListener('keyup', this.handleKeyup)
  }

  // 播放音频
  playAudio = (index, level) => {
    // 如果之前正在播，那就清掉之前的音频
    this.gainNode &&
      this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime)
    this.oscillator && this.oscillator.stop(this.audioCtx.currentTime + 1)

    // 创建音调控制对象
    this.oscillator = this.audioCtx.createOscillator()
    // 创建音量控制对象
    this.gainNode = this.audioCtx.createGain()

    // 音调音量关联
    this.oscillator.connect(this.gainNode)
    // 音量和设备关联
    this.gainNode.connect(this.audioCtx.destination)
    // 音调类型指定为正弦波
    this.oscillator.type = 'sine'
    // 设置音调频率
    this.oscillator.frequency.value = VOICE_MAP[level][index]
    // 当前音量设为0
    this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime)
    // 0.01秒时间内音量从刚刚的0变成1，线性变化
    this.gainNode.gain.linearRampToValueAtTime(
      1,
      this.audioCtx.currentTime + 0.01
    )
    // 声音开始
    this.oscillator.start(this.audioCtx.currentTime)
  }

  // 停止音频
  stopAudio = () => {
    this.gainNode &&
      this.gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        this.audioCtx.currentTime + 0.8
      )
    this.oscillator && this.oscillator.stop(this.audioCtx.currentTime + 0.8)
    this.oscillator = this.gainNode = null
  }

  // 键盘按下
  handleKeydown = e => {
    const keyCode = e.keyCode
    if (keyCode === 16) {
      // 按下 shift 键开启高音
      this.highTone = true
      this.setState( { level: 2 } )
    } else if (keyCode === 18) {
      // 按下 alt 键开启低音
      this.lowTone = true
      this.setState( { level: 0 } )
    }
    if (KEYCODE_MAP[keyCode]) {
      this.setState( { curKey: KEYCODE_MAP[ keyCode ] - 1 }, () => {
        this.playAudio(KEYCODE_MAP[keyCode] - 1, this.state.level)
      })
    }
  }

  // 键盘松开
  handleKeyup = ( e ) => {
    const keyCode = e.keyCode
    if(keyCode === 16) {
      this.highTone = false
    } else if(keyCode === 18) {
      this.lowTone = false
    }
    if ( !this.highTone && !this.lowTone ) {
      this.setState( { level: 1 } )
    }
    this.stopAudio()
    this.setState( { curKey: -1 } )
  }

  handleMousedown = (index, level, e) => {
    e.persist()
    console.log(index, level)
    this.playAudio(index, level)
  }

  handleMouseup = e => {
    e.persist()
    this.stopAudio()
  }

  playSong = async (data) => {
    if(!data || data.length < 1) return
    const tmp = [...data]
    while(tmp.length) {
      await sleep( 300 )
      const current = tmp.shift()
      if(!current) continue

      if ( current.delay) {
        await sleep(50)
        continue
      } else if(current.stop) {
        // this.stopAudio()
        // this.setState({level: 1, curKey: -1})
        // return
        continue
      } else  {
        console.log(current.level)
        this.setState({ level: current.level, curKey: current.index-1 })
        this.playAudio(current.index-1, current.level)
        const duration = current.duration ? 70 * current.duration : 70
        await sleep( duration )
        this.stopAudio()
      }
    }
    this.setState({level: 1, curKey: -1})
  }

  renderPianoKey = () => {
    return (
      <div className="container">
        {[0, 1, 2].map(level => (
          <div className="section" key={`level-${level}`}>
            {Array(7)
              .fill()
              .map((v, i) => {
                const active = level === this.state.level && i === this.state.curKey
                return (
                <span
                  className={`btn level${level}${active ? ' active' : ''}`}
                  data-index={i}
                  key={`key-${level}-${i}`}
                  onMouseDown={this.handleMousedown.bind(this, i, level)}
                  onMouseUp={this.handleMouseup}
                >
                  {i + 1}
                </span>
              )})}
          </div>
        ))}
      </div>
    )
  }

  renderSong = () => {
    return <div>
      {SONGS.map((song, index) => {
        return <button key={`song-${index}`} onClick={() => { this.playSong(song.data) }}>{song.label}</button>
      })}
    </div>
  }

  render() {
    return (
      <div className="piano">
        <div className="piano-hd">piano</div>
        <div className="piano-bd">{this.renderPianoKey()}</div>
        <div className="song-wrap">{this.renderSong()}</div>
      </div>
    )
  }
}
