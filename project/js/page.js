document.querySelector('#play').onclick = play
document.querySelector('#pause').onclick = pause
document.querySelector('#volume').oninput = videoVolume


let video = document.querySelector('#player')
let progress = document.querySelector('#progress')

video.ontimeupdate = progressUpdate
progress.onclick = videoRewind

function play(){
  video.play()
}
function pause(){
  video.pause()
}
function videoVolume(){
  let v = this.value
  video.volume = v / 100
}
function progressUpdate(){
  let d = video.duration
  let c = video.currentTime
  progress.value = (100 * c) / d
  // document.querySelector('#out').innerHTML = video.currentTime
}
function videoRewind(){
  let w = this.offsetWidth
  let o = event.offsetX
  this.value = 100 * o / w
  video.currentTime = video.duration * (o/w)
}