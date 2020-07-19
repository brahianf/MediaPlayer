import MediaPlayer from 'mediap/lib/MediaPlayer';
import AutoPlay from 'mediap/lib/plugins/AutoPlay';
import AutoPause from 'mediap/lib/plugins/AutoPause';
import Ads from 'mediap/lib/plugins/Ads';


// Selector o varios
const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

// Play(), todos los elementos del DOM tienen API
// htmlmediaelement => propiedades eventos y metodos
const playButton: HTMLMediaElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();


const muteButton: HTMLMediaElement = document.querySelector('#muteButton');
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
