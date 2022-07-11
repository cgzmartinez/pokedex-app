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

for (let i=0; i<pokemonList.length; i++){
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ').' );

    if(pokemonList[i].height > 6 ) {
        document.write(' Wow, that\'s big!'+ '<br>');
    } else if(pokemonList[i].height <7 && pokemonList[i].height >5) {
        document.write(' That\'s average.' + '<br>');
    } else {
        document.write(' That\'s pretty small.' + '<br>');
    }
}
