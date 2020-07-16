function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
    if(!player.muted){
        // Setters no se llaman como funcion pq son un valor virtual
        player.muted= true;
        player.play();
    }
}

export default AutoPlay;