const playSymbol = '\u25B6';
const pauseSymbol = '\u275A\u275A';

const buttons = document.getElementsByClassName("pausePlayButton");
const audios = document.getElementsByClassName("audio");
const volumes = document.getElementsByClassName("volume-slider");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      // Check if audio is paused
      if (audios[i].paused) {
        // If paused, play audio and change button text to "Pause"
        audios[i].play();
        buttons[i].innerHTML = pauseSymbol;
      } else {
        // If playing, pause audio and change button text to "Play"
        audios[i].pause();
        buttons[i].innerHTML = playSymbol;
      }
    });

    volumes[i].addEventListener("input", () => {
        audios[i].volume = volumes[i].value;
    });
}


