const iframe = document.querySelector('iframe');

const options = {
  id: 'vimeo-player',
  width: 'width',
};

const player = new Vimeo.Player('vimeo-player', options);

player.setVolume(0);

player.on('play', function () {
  console.log('Played the first video');
  setCurrentTime(seconds);
});
