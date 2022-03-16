import axios from "axios";

window.addEventListener("load", () => {
  const items = axios.get('http://localhost:3000/songs')
    .then(response => response.data)
  .then(data => console.log(data));

var lookup = {};
var result = [];

for (var item, i = 0; item = items[i++];) {
  var name = item.name;

  if (!(name in lookup)) {
    lookup[name] = 1;
    result.push(name);
  }
}
  });
  