import MediaPlayer from './MediaPlayer.js'
import AutoPlay from '../plugins/AutoPlay.js'


// Selector o varios
const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});

// Play(), todos los elementos del DOM tienen API
// htmlmediaelement => propiedades eventos y metodos
button.onclick = () => player.play();
