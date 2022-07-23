let pokemonRepository = (function() {
// wrapping pokemonList array in IIFE.

  let pokemonList = [
    { name: 'Dragonite', height: 7, types: ['Dragon', 'Flying']},
    { name: 'Tyranitar', height: 6, types: ['Rock', 'Dark']},
    { name: 'Scizor', height: 5, types: ['Bug', 'Steel']}
  ];
// Changed layout of array to be more concise.

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('Pokemon is not correct!');
    }
  }

  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    // each pokemon assigned to unordered list
    let listpokemon = document.createElement("li");
    // assigns pokemon their own button
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  // retrieves pokemon information and displays on console
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
// End of IIFE wrap.

  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
