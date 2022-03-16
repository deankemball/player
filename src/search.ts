import axios from "axios";
import { parse } from "path";

window.addEventListener("load", async () => {
  let searchbar = document.querySelector("#searchbar") as HTMLInputElement;

  searchbar.addEventListener("input", updateSearchList);
  searchbar.addEventListener("focus", displaySearchList);
  searchbar.addEventListener("focusout", hideSearchList);
  const songsJSON = await axios.get("http://localhost:3000/songs");
  let data = songsJSON.data;
  //   let songsJSONstring = songsJSON.data();
  console.log(Object.values(data));
  let resultsList = document.querySelector("#results-list > ul");
  const searchContainer = document.getElementById(
    "search-container"
  ) as HTMLElement;
  function displaySearchList() {
    let searchList = document.createElement("div");

    searchContainer.appendChild(searchList);
    searchList.classList.toggle("search-list");
  }

  function hideSearchList() {
    const searchlist = searchContainer.children[1];
    searchContainer.removeChild(searchlist);
  }

  function updateSearchList() {
    let input = searchbar.value.toLowerCase();

    const artists = Object.keys(data);
    const partialMatches = artists.filter((elem) => {
      return elem.startsWith(input);
    });

    const searchlist = searchbar.firstChild;

    // first remove all searchterms in searchlist
    const searchTerms = searchlist.children;
    for (let i = 0; i < searchTerms.length; i++) {
      searchlist.removeChild(searchTerms[i]);
    }
    partialMatches.forEach((partialMatch) => {
      const searchTerm = document.createElement("div");

      searchTerm.classList.toggle("search-term");
      // @ts-ignore
      searchTerm.textContent = partialMatch;
      // @ts-ignore
      searchlist.appendChild(searchTerm);
    });
  }

  // add event listener to searchTerm elements, when you click on them, the text gets put into input field
  document.addEventListener("click", (event) => {
    // @ts-ignore
    if (event.target.matches(".searchlist > div") as HTMLElement) {
      // @ts-ignore
      searchbar.value = event.target.textContent;
    }
  });
});
