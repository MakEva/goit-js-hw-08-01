
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const currentTime = function ({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds);
};
player.on('timeupdate', throttle(currentTime, 1000));

const newCurrentTime = localStorage.getItem("videoplayer-current-time");
if (newCurrentTime) {
    player.setCurrentTime(newCurrentTime);
}



    