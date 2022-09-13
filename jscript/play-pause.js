let vid = document.querySelector('.cooking-vid');
// let vid = document.getElementsByClassName('cooking-vid')[0];

function playPauseVideo() {
      if (!vid.paused) {
        vid.pause();
        document.querySelector('.play-pause-effect').style.backgroundImage= "url('../icons/play.svg')";
      } else {
        vid.play();
        document.querySelector('.play-pause-effect').style.backgroundImage= 'none';
      }
    }