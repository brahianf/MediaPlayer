import MediaPlayer from '../assets/MediaPlayer'

class AutoPlay {
    constructor() { }
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            // Setters no se llaman como funcion pq son un valor virtual
            player.media.muted = true;
            player.play();
        }
    }
}


export default AutoPlay;