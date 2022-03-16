import axios from "axios";
import _ from "lodash";

window.addEventListener("load", async () => {
  let tracks;
  try {
    tracks = await axios
      .get(`http://localhost:3000/songs`)
      .then((res) => res.data);
  } catch (error) {
    console.error(error);
  }

  console.log(tracks);
  type Track = {
    id: number;
    artist: string;
    album: string;
    dirPath: string;
    coverPath: string;
  };

  // access object and get id + path
  let trackID: number;
  let Path = tracks.dirPath;
  let nextTrack: number = trackID + 1;
  let prevTrack: number = trackID - 1;

  // grabbing elements
  const PlayButton = document.getElementById("play") as HTMLElement;
  const SkipBack = document.getElementById("skip-back") as HTMLElement;
  const SkipForward = document.getElementById("skip-forward") as HTMLElement;
  const PauseIcon = document.getElementById("pause-icon") as HTMLElement;
  const PlayIcon = document.getElementById("play-icon") as HTMLElement;

  // basics for "starting" a track
  let currentTrack = document.createElement("audio") as HTMLAudioElement;
  let isPlaying = false;
  let DivClick = document.getElementById(String(trackID)) as HTMLElement; // div you click (like track in tracklist)
  let DivID: string;

  // get ID by clicking on track/album
  DivClick.addEventListener("click", () => {
    DivID = DivClick.getAttribute("id");
    getTrack(trackID);
  });
  async function getTrack(trackID: number) {
    let Track: Track;
    try {
      trackID = Number(DivID);
      Track = await axios
        .get(`http://localhost:3000/songs/${trackID}`)
        .then((res) => res.data);
    } catch (error) {
      console.error(error);
    }

    async function loadTrack(trackID: number) {
      await getTrack(trackID);
      currentTrack.src = Track.dirPath;
      currentTrack.load();
      currentTrack.addEventListener("ended", playNext);
    }

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
      currentTrack.play();
    }

    // Prev track
    function playPrev() {
      trackID = prevTrack;
      loadTrack(trackID);
      currentTrack.play();
    }

    // Skip Forward
    SkipForward.addEventListener("click", () => {
      playNext();
    });

    // Skip Back
    SkipBack.addEventListener("click", () => {
      playPrev();
    });
  }
});
