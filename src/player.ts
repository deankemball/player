window.addEventListener("load", () => {
  const audioFile = "assets/01_Low_Fi.mp3";
  // var audio = new Audio(audioFile);
  const audio = document.getElementById("audio") as HTMLAudioElement;

  const audioSource = document.getElementById(
    "audioSource"
  ) as HTMLAudioElement;
  audioSource.src = audioFile;
  var PlayButton = document.getElementById("play") as HTMLElement;
  var SkipBack = document.getElementById("skip-back") as HTMLElement;
  var SkipForward = document.getElementById("skip-forward") as HTMLElement;

  // Make Playbutton work

  PlayButton.addEventListener("click", () => {
    audioSource.src = audioFile;
    console.log("play");
    audio.play();
  });

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
