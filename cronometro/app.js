const btnPlay = document.getElementById('btn-play')
const btnPause = document.getElementById('btn-pause')
const btnReplay = document.getElementById('btn-replay')
const labelClock = document.getElementById('clock')

let second = 0, minute = 0, hour = 0;
let idTime, flag = true;

btnPlay.addEventListener('click', () => {
  if (flag) {
    idTime = setInterval(() => {
      second++
      labelClock.innerText = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
      if (second === 60) {
        minute++
        second = 0
        labelClock.innerText = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
      }
  
      if (minute === 60) {
        hour++
        minute = 0
        labelClock.innerText = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
      }
    }, 1000);
  }
  flag = false
})

btnPause.addEventListener('click', () => {
  clearInterval(idTime)
  flag = true
})

btnReplay.addEventListener('click', () => {
  second = 0
  minute = 0
  hour = 0
  flag = true
  clearInterval(idTime)
  labelClock.innerText = '00:00:00'
})