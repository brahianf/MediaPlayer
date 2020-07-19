import MediaPlayer from '../../MediaPlayer'
import Ads , {Ad} from'./ads'

class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;

    constructor() {
        this.ads = Ads.getInstance();
        this.handleTipeUpdate = this.handleTipeUpdate.bind(this)
    }
    run(player: MediaPlayer){
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTipeUpdate);
    }

    private handleTipeUpdate () {
        const currentTime = Math.floor(this.media.currentTime);
        if(currentTime % 30 == 0){
            this.renderAd();
        }
    }

    private renderAd() {
        if(this.currentAd) {
            return;
        }
        const ad= this.ads.getAd();
        this.currentAd = ad;
        console.log(ad)
    }
}

export default AdsPlugin;