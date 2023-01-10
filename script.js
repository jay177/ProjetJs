const poke_container = document.getElementById('poke_container');
const pokemons_number = 150; // fixe le nombre de pokemon maximun a afficher
// permet de faire une itération pour que les pokemon soit afficher de 1 jusqu'au nombre choisi
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async id => { // async sert faire charger plusieur chose en meme temps 
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon); // apelle la fonction qui va crée les différante cart pokemon 
  

}




// creation de carte pokemon
const createPokemonCard = (pokemon) => {
  const pokemonEL = document.createElement('div'); // creation de div cette div va etre notre card 
  pokemonEL.classList.add('pokemon');
  const { id, name, sprites, types } = pokemon;  // on defini la constante pokemon
  const type = types[0].type.name;
  // cretion d'un élement html qui va etre modifier et génerer par le js 
  const pokeInnerHTML = ` 
  <div class="img-container">
    <img id="j" src="${sprites. front_default}" alt="${name}"/>
    <img id="shy" src="${sprites. front_shiny}" alt="${name}2"/>
  </div
  <div class="info">
    <span class="number">
    ${id}
    </span>
    <h3 class="name">
    ${name}
    </h3>
    <small class="type">
    Type: <span>${type}</span>
    </small>
    </div>
  `

  pokemonEL.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEL);
}

fetchPokemons();

