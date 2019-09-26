(window["webpackJsonpreact-piano"]=window["webpackJsonpreact-piano"]||[]).push([[0],{13:function(e,n,l){e.exports=l(21)},18:function(e,n,l){},19:function(e,n,l){},21:function(e,n,l){"use strict";l.r(n);var t=l(0),i=l.n(t),a=l(10),d=l.n(a),o=(l(18),l(19),l(7)),r=l.n(o),v=l(12),s=l(11),c=l(2),u=l(3),x=l(5),p=l(4),y=l(1),h=l(6),f=(l(9),600),m=150,w=function(e){function n(e){var l;return Object(c.a)(this,n),(l=Object(x.a)(this,Object(p.a)(n).call(this,e))).playEvent=function(e,n){l.draw(e,n)},l.draw=function(e,n){e.clearRect(0,0,f,m);var t=n.frequencyBinCount,i=new Uint8Array(t);n.getByteFrequencyData(i);for(var a,d=parseInt(.5*f/t),o=0,r=0;r<t;r++){var v=i[r];a=parseInt(.4*v),e.fillRect(o,m-a,d,a),o+=d+3}requestAnimationFrame(l.draw.bind(Object(y.a)(l),e,n))},l.canvasRef=i.a.createRef(null),l.audioRef=i.a.createRef(null),l.audioCtx=new AudioContext,l}return Object(h.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.initAudioContext();var e=this.canvasRef.current,n=this.audioRef.current;n.src="".concat("","song.mp3"),this.canvasCtx=e.getContext("2d"),this.canvasCtx.lineWidth=2,this.canvasCtx.fillStyle="#4285f4",this.audioSource=this.audioCtx.createMediaElementSource(n),this.audioSource.connect(this.analyser),this.analyser.connect(this.audioCtx.destination),n.addEventListener("play",this.playEvent.bind(this,this.canvasCtx,this.analyser)),n.addEventListener("pause",(function(){console.log("stop")}))}},{key:"componentWillUnmount",value:function(){this.audioRef.current.removeEventListener("play",this.playEvent.bind(this,this.canvasCtx,this.analyser))}},{key:"initAudioContext",value:function(){this.audioCtx=new AudioContext,this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256}},{key:"render",value:function(){return i.a.createElement("div",{className:"audio-canvas-wrap"},i.a.createElement("canvas",{ref:this.canvasRef,className:"audio-canvas",width:f,height:m}),i.a.createElement("audio",{className:"audio",ref:this.audioRef,controls:!0}))}}]),n}(i.a.Component);function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80;return new Promise((function(n){return setTimeout((function(){n()}),e)}))}var b=[{label:"\u5c0f\u5e78\u8fd0",data:[{level:1,index:3},{level:1,index:3},{level:1,index:5},{level:1,index:5},{level:2,index:1},{level:2,index:1},{level:1,index:7},{delay:!0},{level:1,index:7},{level:1,index:6},{level:1,index:3},{level:1,index:6},{delay:!0},{stop:!0}]},{label:"\u5730\u94c1\u7b49\u5f85",data:[{level:2,index:3},{level:2,index:4},{level:2,index:5},{level:2,index:5},{level:2,index:5},{level:2,index:3},{level:2,index:2},{level:2,index:2},{level:2,index:5},{delay:!0},{stop:!0},{stop:!0},{level:2,index:1},{level:2,index:1},{level:1,index:7},{level:2,index:3},{level:2,index:3},{level:2,index:1},{level:1,index:7},{delay:!0},{level:2,index:3},{delay:!0},{stop:!0},{stop:!0},{level:1,index:6},{level:2,index:1},{level:2,index:1},{level:1,index:6},{level:1,index:5},{level:1,index:5},{level:2,index:1},{delay:!0},{stop:!0},{stop:!0},{level:2,index:4},{level:2,index:3},{level:2,index:1},{level:2,index:2},{level:2,index:3},{delay:!0},{level:2,index:2},{stop:!0},{stop:!0},{level:2,index:5},{level:2,index:5},{level:2,index:5},{level:2,index:3},{level:2,index:2},{delay:!0},{level:2,index:5},{level:2,index:5},{level:2,index:2},{stop:!0},{stop:!0},{level:2,index:1},{level:2,index:3},{level:2,index:3},{level:2,index:1},{level:1,index:7},{delay:!0},{level:2,index:3},{stop:!0},{stop:!0},{level:1,index:6},{level:2,index:1},{level:2,index:1},{level:2,index:6},{level:1,index:5},{delay:!0},{level:1,index:6},{level:2,index:1},{level:2,index:2},{level:2,index:3},{stop:!0},{stop:!0},{level:2,index:4},{level:2,index:3},{level:2,index:1},{level:2,index:2},{delay:!0},{delay:!0},{stop:!0}]},{label:"\u7231\u5c14\u5170\u753b\u7709",data:[{level:1,index:1},{level:1,index:2},{level:1,index:3,duration:3},{delay:!0},{level:1,index:2},{level:1,index:1},{level:1,index:2},{delay:!0},{level:1,index:3},{level:1,index:5},{level:1,index:6,duration:3},{level:1,index:5},{delay:!0},{level:2,index:1},{level:1,index:5},{level:1,index:6,duration:2},{level:1,index:5},{level:1,index:3},{level:1,index:2},{delay:!0},{level:1,index:1},{level:1,index:2},{level:1,index:3,duration:3},{stop:!0},{stop:!0},{level:1,index:1},{level:1,index:2},{level:1,index:3,duration:3},{delay:!0},{level:1,index:2},{level:1,index:1},{level:1,index:2},{delay:!0},{level:1,index:3},{level:1,index:5},{level:1,index:6,duration:3},{level:1,index:5},{delay:!0},{level:2,index:1},{level:1,index:5},{level:1,index:6,duration:2},{level:1,index:5},{level:1,index:3},{level:1,index:2},{delay:!0},{level:1,index:1},{level:1,index:2},{level:1,index:1,duration:3},{stop:!0},{stop:!0},{level:1,index:5},{level:2,index:1},{delay:!0},{level:1,index:7,duration:2},{level:1,index:5},{level:1,index:6},{delay:!0},{level:2,index:1},{level:1,index:6},{level:1,index:7,duration:3},{level:1,index:5},{delay:!0},{level:1,index:3},{level:1,index:5},{level:1,index:6},{delay:!0},{level:1,index:5},{level:1,index:3},{level:1,index:5},{level:1,index:6,duration:2},{level:2,index:1},{level:2,index:2},{level:2,index:3,duration:3},{stop:!0},{stop:!0},{level:1,index:5},{level:2,index:1},{delay:!0},{level:1,index:7,duration:2},{level:1,index:5},{level:1,index:6},{delay:!0},{level:2,index:1},{level:1,index:6},{level:1,index:7,duration:3},{level:1,index:5},{delay:!0},{level:1,index:3},{level:1,index:5},{level:1,index:6},{delay:!0},{level:1,index:5},{level:1,index:3},{level:1,index:5},{level:1,index:6,duration:3},{level:2,index:1},{level:2,index:2},{level:2,index:1,duration:3},{stop:!0},{stop:!0}]}],C={0:[261.63,293.67,329.63,349.23,391.99,440,493.88],1:[523.25,587.33,659.26,698.46,783.99,880,987.77],2:[1046.5,1174.66,1318.51,1396.92,1567.98,1760,1975.52]},k={49:1,50:2,51:3,52:4,53:5,54:6,55:7},E=function(e){function n(e){var l;return Object(c.a)(this,n),(l=Object(x.a)(this,Object(p.a)(n).call(this,e))).audioCtx=null,l.gainNode=null,l.oscillator=null,l.highTone=!1,l.lowTone=!1,l.state={curKey:-1,level:1},l.playAudio=function(e,n){l.gainNode&&l.gainNode.gain.setValueAtTime(0,l.audioCtx.currentTime),l.oscillator&&l.oscillator.stop(l.audioCtx.currentTime+1),l.oscillator=l.audioCtx.createOscillator(),l.gainNode=l.audioCtx.createGain(),l.oscillator.connect(l.gainNode),l.gainNode.connect(l.audioCtx.destination),l.oscillator.type="sine",l.oscillator.frequency.value=C[n][e],l.gainNode.gain.setValueAtTime(0,l.audioCtx.currentTime),l.gainNode.gain.linearRampToValueAtTime(1,l.audioCtx.currentTime+.01),l.oscillator.start(l.audioCtx.currentTime)},l.stopAudio=function(){l.gainNode&&l.gainNode.gain.exponentialRampToValueAtTime(.001,l.audioCtx.currentTime+.8),l.oscillator&&l.oscillator.stop(l.audioCtx.currentTime+.8),l.oscillator=l.gainNode=null},l.handleKeydown=function(e){var n=e.keyCode;16===n?(l.highTone=!0,l.setState({level:2})):18===n&&(l.lowTone=!0,l.setState({level:0})),k[n]&&l.setState({curKey:k[n]-1},(function(){l.playAudio(k[n]-1,l.state.level)}))},l.handleKeyup=function(e){var n=e.keyCode;16===n?l.highTone=!1:18===n&&(l.lowTone=!1),l.highTone||l.lowTone||l.setState({level:1}),l.stopAudio(),l.setState({curKey:-1})},l.handleMousedown=function(e,n,t){t.persist(),console.log(e,n),l.playAudio(e,n)},l.handleMouseup=function(e){e.persist(),l.stopAudio()},l.playSong=function(){var e=Object(s.a)(r.a.mark((function e(n){var t,i,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&!(n.length<1)){e.next=2;break}return e.abrupt("return");case 2:t=Object(v.a)(n);case 3:if(!t.length){e.next=28;break}return e.next=6,g(300);case 6:if(i=t.shift()){e.next=9;break}return e.abrupt("continue",3);case 9:if(!i.delay){e.next=15;break}return e.next=12,g(50);case 12:return e.abrupt("continue",3);case 15:if(!i.stop){e.next=19;break}return e.abrupt("continue",3);case 19:return console.log(i.level),l.setState({level:i.level,curKey:i.index-1}),l.playAudio(i.index-1,i.level),a=i.duration?70*i.duration:70,e.next=25,g(a);case 25:l.stopAudio();case 26:e.next=3;break;case 28:l.setState({level:1,curKey:-1});case 29:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l.renderPianoKey=function(){return i.a.createElement("div",{className:"container"},[0,1,2].map((function(e){return i.a.createElement("div",{className:"section",key:"level-".concat(e)},Array(7).fill().map((function(n,t){var a=e===l.state.level&&t===l.state.curKey;return i.a.createElement("span",{className:"btn level".concat(e).concat(a?" active":""),"data-index":t,key:"key-".concat(e,"-").concat(t),onMouseDown:l.handleMousedown.bind(Object(y.a)(l),t,e),onMouseUp:l.handleMouseup},t+1)})))})))},l.renderSong=function(){return i.a.createElement("div",{className:"song-list"},b.map((function(e,n){return i.a.createElement("button",{className:"btn-song",key:"song-".concat(n),onClick:function(){l.playSong(e.data)}},e.label)})))},l.audioCtx=new AudioContext,l.level=1,l}return Object(h.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown.bind(this)),window.addEventListener("keyup",this.handleKeyup.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown),window.removeEventListener("keyup",this.handleKeyup)}},{key:"render",value:function(){return i.a.createElement("div",{className:"piano"},i.a.createElement("div",{className:"piano-hd"},"piano"),i.a.createElement("div",{className:"piano-bd"},this.renderPianoKey()),i.a.createElement("div",{className:"song-wrap"},this.renderSong()),i.a.createElement(w,null))}}]),n}(t.PureComponent);var N=function(){return i.a.createElement("div",{id:"app"},i.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,n,l){}},[[13,1,2]]]);
//# sourceMappingURL=main.0b945fc3.chunk.js.map