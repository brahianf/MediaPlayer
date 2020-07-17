
// Clase con objeto de configuración  
class MediaPlayer {
    constructor(config) {
        // Leer cual es el elemento de config que representa el media
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },

            set muted(value) {
                this.media.muted = value;
                // if(value== true){
                //     this.media.muted=true;
                // } else {
                //     this.media.muted=false;
                // }
            }
        };

        this.plugins.forEach(plugin => {
            plugin.run(player);
        });
    }
    // Método play añadido al prototype
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
}







export default MediaPlayer;