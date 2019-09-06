import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import AdsPlugin from './plugins/Ads/index'

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video, 
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin()
  ],
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.toggleVideo();

const muteButton: HTMLElement = document.querySelector('#muteButton')
muteButton.onclick = () => player.toggleAudio();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}