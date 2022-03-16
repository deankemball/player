import axios from "axios";
import _ from "lodash";

window.addEventListener("DOMContentLoaded", async () => {
  const songs = await axios.get('http://localhost:3000/songs')
    .then(response => response.data)
    console.log(window.location)
    const param = decodeURI(window.location.search.split("=")[1])

    const filtered = songs.filter(song => song.album === param)
    console.log(filtered)

    let artistName = document.getElementById("artistName")
    let albumName = document.getElementById("albumName")

    albumName.innerHTML = filtered[0].album
    artistName.innerHTML = filtered[0].artist

    
    let tracklist = document.getElementById("tracklist")

    
    filtered.forEach(song => {
        const trackContainer = document.createElement("div");
        trackContainer.id = song.id;
        tracklist.appendChild(trackContainer)
        trackContainer.classList.add("flex","justify-between")
        const trackInfo = document.createElement("div")
        const trackName = document.createElement("p")
        trackName.innerHTML = song.title
        const artistName = document.createElement("p")
        artistName.innerHTML = song.artist
        artistName.classList.add("text-xs")
        trackContainer.appendChild(trackInfo)
        console.log(song.title)
    }
    )
});
    
    //   <div class="flex justify-between">
        //   <div>
        //       <p>Track Name</p><p class="text-xs">Artist Name</p>
        //   </div>
    //      <p class="self-start">03:16</p>
    //  </div>
    