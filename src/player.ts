window.addEventListener("load", () => {
  var audio = new Audio("01_Low_Fi.mp3");
  var PlayButton = document.getElementById("play") as HTMLElement;
  var SkipBack = document.getElementById("skip-back") as HTMLElement;
  var SkipForward = document.getElementById("skip-forward") as HTMLElement;

  // Make Playbutton work

  PlayButton.onclick = () => {
    audio.play();
  };

  // PlayButton.onclick = () => {
  //   if (audio.paused) {
  //     audio.play();
  //   } else {
  //     audio.pause();
  //   }
  // };

  // audio.onplay = () => {
  //   PlayButton.innerHTML; // continue here
  // };
});
