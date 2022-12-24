import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOCAL = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentTime) {
  localStorage.setItem(KEY_LOCAL, JSON.stringify(currentTime));
}

const currentTime = localStorage.getItem(KEY_LOCAL);

if (currentTime) {
  const { seconds } = JSON.parse(currentTime);
  player.setCurrentTime(seconds);
}
