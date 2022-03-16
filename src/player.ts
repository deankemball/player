import axios from "axios";
window.addEventListener("load", async (id) => {
  let Track;
  try {
    Track = await axios.get(`http://localhost:3000/songs/${id}`);
  } catch (error) {
    console.error(error);
  }

  // access object and get id + path
  let trackID: number = Track.id;
  let Path = Track.dirPath;
  let nextTrack: number = trackID + 1;
  let prevTrack: number = trackID - 1;

  // basics for "starting" a track
  let currentTrack = document.createElement("audio") as HTMLAudioElement;
  let isPlaying = false;

  function loadTrack(trackID: number) {
    // get ID from addeventlisteners on albums / tracks etc.
    // take ID and get path
    currentTrack.src = Path;
    currentTrack.load();
    currentTrack.addEventListener("ended", playNext());
  }

  // grabbing elements
  var PlayButton = document.getElementById("play") as HTMLElement;
  var SkipBack = document.getElementById("skip-back") as HTMLElement;
  var SkipForward = document.getElementById("skip-forward") as HTMLElement;
  var PauseIcon = document.getElementById("pause-icon") as HTMLElement;
  var PlayIcon = document.getElementById("play-icon") as HTMLElement;

  // Playbutton
  PlayButton.addEventListener("click", () => {
    if (isPlaying) {
      currentTrack.play();
      isPlaying = true;
      PlayIcon.classList.toggle("hidden");
      PauseIcon.classList.remove("hidden");
    } else {
      currentTrack.pause();
      isPlaying = false;
      PlayIcon.classList.remove("hidden");
      PauseIcon.classList.toggle("hidden");
    }
  });

  // Next track
  function playNext() {
    if (trackID < 43) {
      trackID = nextTrack;
    } else {
      trackID = 1;
    }
    loadTrack(trackID);
    Track.play();
  }

  // Prev track
  function playPrev() {
    trackID = prevTrack;
    loadTrack(trackID);
    Track.play();
  }

  // Skip Forward
  SkipForward.addEventListener("click", () => {
    playNext();
  });

  // Skip Back
  SkipBack.addEventListener("click", () => {
    playPrev();
  });

  // grab the time and stick it to the width of new div
  // var SeekBar = document.getElementById("SeekBar") as HTMLElement;
  // function updateSeekBar() {
  //   let percentage = Math.floor((100 / audio.duration) * audio.currentTime);
  //   Seekbar.classList.toggle("w");
  // }
});
