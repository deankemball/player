window.addEventListener("load", () => {
  const previousSong = "assets/02 (Varoom!)"; // just some example for skipping backwards
  const nextSong = "assets/03 Laisser-Faire.mp3"; // just some example for skipping forward
  // var audio = new Audio("./assets/02 (Varoom!).mp3");
  // audio.type = "audio/mp3";
  // audio.load();
  const audio = document.getElementById("audio") as HTMLAudioElement;
  const audioSource = document.getElementById(
    "audioSource"
  ) as HTMLAudioElement;

  // audioSource.src = audioFile;
  var PlayButton = document.getElementById("play") as HTMLElement;
  var SkipBack = document.getElementById("skip-back") as HTMLElement;
  var SkipForward = document.getElementById("skip-forward") as HTMLElement;
  var PauseIcon = document.getElementById("pause-icon") as HTMLElement;
  var PlayIcon = document.getElementById("play-icon") as HTMLElement;
  // Make Playbutton work

  PlayButton.addEventListener("click", () => {
    // audio.play();

    if (audio.paused) {
      audio.play();
      PlayIcon.classList.toggle("hidden");
      PauseIcon.classList.remove("hidden");
    } else {
      audio.pause();
      PlayIcon.classList.remove("hidden");
      PauseIcon.classList.toggle("hidden");
    }
  });

  // Simon probably has to add a way to "move" one song forward
  SkipForward.addEventListener("click", () => {
    let audioSource = document.getElementById(
      "audioSource"
    ) as HTMLAudioElement;
    audioSource.src = nextSong;
    audio.load();
    audio.play();
  });

  // Simon probably has to find a way to "move" one song backwards :>
  SkipBack.addEventListener("click", () => {
    let audioSource = document.getElementById(
      "audioSource"
    ) as HTMLAudioElement;
    audio.removeChild(audioSource);
    //@ts-ignore
    audioSource = document.createElement("source");
    audioSource.src = previousSong;
    audioSource.id = "audioSource";
    audio.appendChild(audioSource);
    audio.load();
    audio.play();
  });

  // audio.onplay = () => {
  //   PlayButton.innerHTML; continue here
  //  };
});
