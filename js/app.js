// let img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';

let pokemon_list = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 165 },
  { id: 30, name: 'moral', type: 'normal', base_experience: 85 },
  { id: 60, name: 'elle', type: 'normal', base_experience: 125 },
  { id: 460, name: 'Abomasnow', type: 'Grass', base_experience: 70 },
  { id: 63, name: 'Abra', type: 'Psychic', base_experience: 90 },
  { id: 359, name: 'Absol', type: 'Dark', base_experience: 150 },
  { id: 617, name: 'Accelgor', type: 'Bug', base_experience: 200 },
  { id: 142, name: 'Aerodactyl', type: 'Rock', base_experience: 40 },
  { id: 306, name: 'Aggron', type: 'Stell', base_experience: 80 },
  { id: 400, name: 'Alakazam', type: 'Psychic', base_experience: 120 },
  { id: 334, name: 'Altaria', type: 'Dragon', base_experience: 290 },
]

let pokemonNames = document.querySelectorAll('h2');
let pokemonTypes = document.querySelectorAll('.type');
let pokemonPower = document.querySelectorAll('.power');
let pokemonImages = document.querySelectorAll('img');

let startGame = document.querySelector('h1');

startGame.setAttribute("style", "cursor: pointer; onmouseover:cursor='pointer';");

startGame.addEventListener('click', play);

function play() {
  let scor = [0, 0];
  for (let i = 0; i < 8; i++) {
    let randomNumber = Math.floor(Math.random() * pokemon_list.length);

    pokemonDetails(i, randomNumber);
    pokemonImagesRandom(i, randomNumber);
    pokemonScore(i, randomNumber, scor);
    showScore(scor);
  }
}

function pokemonDetails(index, getRandomNumber) {
  pokemonNames[index].textContent = pokemon_list[getRandomNumber].name;
  pokemonTypes[index].textContent = pokemon_list[getRandomNumber].type;
  pokemonPower[index].textContent = pokemon_list[getRandomNumber].base_experience;
}

function pokemonImagesRandom(index, getRandomNumber) {
  let id = String(pokemon_list[getRandomNumber].id).padStart(3, '0');
  let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  pokemonImages[index].src = imgUrl;
}

function pokemonScore(index, getRandomNumber, scor) {
  if(index < 4){
    scor[0] += pokemon_list[getRandomNumber].base_experience;
  }else {
    scor[1] += pokemon_list[getRandomNumber].base_experience;
  }
}

function showScore(scor) {
  let result = document.querySelector('h1');
  if(scor[0] > scor[1]){
    result.textContent = `Player 1 wins = ${scor[0]}`;
  }else {
    result.textContent = `Player 2 wins = ${scor[1]}`;
  }
}