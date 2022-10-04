import local from './local-storage';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  const currentTime = localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
