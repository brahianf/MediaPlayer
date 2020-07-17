import MediaPlayer from './MediaPlayer.js'
import AutoPlay from '../plugins/AutoPlay.js'
import AutoPause from '../plugins/AutoPause.ts'


// Selector o varios
const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()],
});

// Play(), todos los elementos del DOM tienen API
// htmlmediaelement => propiedades eventos y metodos
const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();


const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
};

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
