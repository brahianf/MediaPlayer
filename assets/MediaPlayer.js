
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

export default MediaPlayer;