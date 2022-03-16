import axios from "axios";

window.addEventListener("load", async () => {
  const albums = await axios.get('http://localhost:3000/songs')
    .then(response => response.data)
  .then(data => {
    const listAlbums = data.map((obj) => {return obj['album']})
    return new Set(listAlbums)
  }
  );
  console.log(albums)
  });
  