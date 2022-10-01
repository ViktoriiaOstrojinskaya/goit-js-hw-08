const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  player
    .getCurrentTime()
    .then(function (seconds) {
      console.log(seconds);
      // seconds = the current playback position
    })
    .catch(function (error) {
      // an error occurred
      console.log(error);
    });
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player
  .setCurrentTime()
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
