// import MediaPlayer from './MediaPlayer.js'

// Clase con objeto de configuración  
function MediaPlayer(config){
    // Leer cual es el elemento de config que representa el media
    this.media = config.el
}

// Método play añadido al prototype
MediaPlayer.prototype.play = function () {
    if(this.media.paused){
        this.media.play();
    } else {
        this.media.pause();
    }   
}

// Selector o varios
const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({el: video});

// Play(), todos los elementos del DOM tienen API
// htmlmediaelement => propiedades eventos y metodos
button.onclick = () => player.play();
