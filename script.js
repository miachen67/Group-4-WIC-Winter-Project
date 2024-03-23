const playSymbol = '\u25B6';
const pauseSymbol = '\u275A\u275A';

const buttons = document.getElementsByClassName("pausePlayButton");
const audios = document.getElementsByClassName("audio");
const volumes = document.getElementsByClassName("volume-slider");
const mute = document.getElementsByClassName("mute");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (audios[i].paused) {
        audios[i].play();
        buttons[i].innerHTML = pauseSymbol;
      } else {
        audios[i].pause();
        buttons[i].innerHTML = playSymbol;
      }
    });

    volumes[i].addEventListener("input", () => {
        audios[i].volume = volumes[i].value;
    });
    
    // mute or unmute audio
    mute[i].addEventListener("click", () => {
      audios[i].muted = !audios[i].muted;
      if (audios[i].muted == true){
        mute[i].innerHTML = '<span class="material-symbols-outlined">volume_off</span>';
      } else {
        mute[i].innerHTML = '<span class="material-symbols-outlined"> volume_up </span>';
      }
    })
}

const taskInput = document.querySelector("#addTask");
let taskList = document.querySelector("#taskList");

function addTask(){
  const taskInputValue = taskInput.value;
  if (taskInputValue === ''){
    alert('Enter a task!');
  } else {
    let li = document.createElement("li");
    li.textContent = taskInputValue;
    taskList.appendChild(li);
  }
}
