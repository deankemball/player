import axios from "axios";
import _ from "lodash";

window.addEventListener("load", async () => {
  const songs = await axios.get('http://localhost:3000/songs')
    .then(response => response.data)
    const albums = _.groupBy(songs, 'album')
    console.log(Object.keys(albums))

  let feed = document.getElementById("feed") as HTMLElement;

//        <div class="flex flex-col items-center">
  //         <a href="album.html">
  //           <div
  //             class="album shadow-md bg-gradient-to-br from-accent-one to-accent-two cursor-pointer"
  //           ></div>
  //         </a>
  //         <div class="flex flex-col w-full mt-3">
  //           <p>Album Title</p>
  //           <p>Artist Name</p>
  //         </div>
  //       </div>

  Object.keys(albums).forEach(item => {
        const albumFlex = document.createElement("div");
        albumFlex.classList.add("flex","flex-col","items-center")
        feed.appendChild(albumFlex);
        const linkTag = document.createElement("a")
        linkTag.href = `album.html?album=${encodeURI(item)}`
        albumFlex.appendChild(linkTag)
        const albumArt = document.createElement("div")
        albumArt.id = item
        albumArt.classList.add("album","shadow-md","bg-gradient-to-br","from-accent-one","to-accent-two","cursor-pointer")
        const image = document.createElement("img")
        // image.src = `../assets/${albums[item][0].coverPath}`
        // console.log(image.src)
        // albumArt.appendChild(image)
        linkTag.appendChild(albumArt)
        const albumTextDiv = document.createElement("div")
        albumTextDiv.classList.add("flex","flex-col","w-full","mt-3")
        albumFlex.appendChild(albumTextDiv)
        const albumTitle = document.createElement("p")
        const artistName = document.createElement("p")
        albumFlex.appendChild(albumTitle)
        albumFlex.appendChild(artistName)
        albumTitle.innerHTML = item
        artistName.innerHTML = albums[item][0].artist



        console.log(item)
      }
  )
  // console.log(albums)

  });
  