import * as fs from "fs";

const dir = "./assets";

let songObjects: Array<Song> = [];

interface Song {
  id: number;
  artist: string;
  album: string;
  title: string;
  dirPath: string;
  coverPath: string;
}

const artists: string[] = fs.readdirSync(dir);
let songId = 0;
songObjects.push(
  ...artists
    .map((artistFolder) => {
      const artistAlbums = fs.readdirSync(`${dir}/${artistFolder}`);
      return artistAlbums.map((albumName) => {
        const albumSongs = fs.readdirSync(
          `${dir}/${artistFolder}/${albumName}`
        );
        const albumCover = albumSongs.filter((songName) =>
          songName.endsWith(".jpg")
        );

        return albumSongs
          .map((songName) => {
            if (songName.endsWith(".jpg")) {
              return;
            }
            songId++;
            const song: Song = {
              id: songId,
              artist: artistFolder,
              album: albumName,
              title: songName,
              dirPath: `/${artistFolder}/${albumName}/${songName}`,
              coverPath: `/${artistFolder}/${albumName}/${albumCover}`,
            };
            return song;
          })
          .filter(Boolean);
      });
    })
    .flat()
    .flat()
);

const dbObj = {
  songs: songObjects,
};

const JSONString = JSON.stringify(dbObj);

fs.writeFileSync("db.json", JSONString);
