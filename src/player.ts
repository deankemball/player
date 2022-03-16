window.addEventListener("load", () => {
  const previousSong = "assets/01_Low_Fi"; // just some example for skipping backwards
  const nextSong = "assets/03 Laisser-Faire.mp3"; // just some example for skipping forward
  const audio = document.getElementById("audio") as HTMLAudioElement;
  const audioSource = document.getElementById("audioSource") as HTMLElement;

  // let track_id = simons-thingy.key?
  let isPlaying = false;
  let currentTrack = document.createElement("audio");

  // audioSource.src = audioFile;
  var PlayButton = document.getElementById("play") as HTMLElement;
  var SkipBack = document.getElementById("skip-back") as HTMLElement;
  var SkipForward = document.getElementById("skip-forward") as HTMLElement;
  var PauseIcon = document.getElementById("pause-icon") as HTMLElement;
  var PlayIcon = document.getElementById("play-icon") as HTMLElement;
  // Make Playbutton work

  PlayButton.addEventListener("click", () => {
    // let audioSource = document.getElementById("audioSource") as HTMLElement;
    // audioSource.setAttribute("src", currentSong);
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
    let audioSource = document.getElementById("audioSource") as HTMLElement;
    // audio.pause();
    audio.load();
    audio.play();
  });

  // Simon probably has to find a way to "move" one song backwards :>
  SkipBack.addEventListener("click", () => {
    let audioSource = document.getElementById(
      "audioSource"
    ) as HTMLAudioElement;
    audioSource.src = previousSong;
    audio.load();
    audio.play();
  });

  // grab the time and stick it to the width of new div
  // var SeekBar = document.getElementById("SeekBar") as HTMLElement;
  // function updateSeekBar() {
  //   let percentage = Math.floor((100 / audio.duration) * audio.currentTime);
  //   Seekbar.classList.toggle("w");
  // }
});
