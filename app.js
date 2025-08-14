//`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;

const url = "https://pokeapi.co/api/v2/pokemo/pikachu";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error('Errorrrrr', err));
//function fetchPikachu() {

// }
