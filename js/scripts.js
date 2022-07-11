let pokemonRepository = (function() {
// wrapping pokemonList array in IIFE.

  let pokemonList = [
    { name: 'Dragonite', height: 7, types: ['Dragon', 'Flying']},
    { name: 'Tyranitar', height: 6, types: ['Rock', 'Dark']},
    { name: 'Scizor', height: 5, types: ['Bug', 'Steel']}
  ];
// Changed layout of array to be more concise.

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll,
  };
})();
// End of IIFE wrap.

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function (pokemon) {
    if (pokemon.height > 6) {
        document.write(`${pokemon.name} <br> Height: ${pokemon.height} - Wow, thats's big! <br> <p>`)
    } else if (pokemon.height < 7 && pokemon.height > 5) {
        document.write(`${pokemon.name} <br> Height: ${pokemon.height} - That's average. <br> <p>`)
    } else {
        document.write(`${pokemon.name} <br> Height: ${pokemon.height} - That's pretty small. <br> <p>`)
    }
})
// ${} didn't work the first few times when using it, look in to that later.
// Remember that you can use html in js
