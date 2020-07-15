
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

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    })
}

MediaPlayer.prototype.mute = function () {
    this.media.muted= true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted= false;
}

export default MediaPlayer;