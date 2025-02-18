const pokemon = require('./data.js');
const game = {
    party: [
        { name: "Charmander"},
        { name: "Podgeotto"},
        { name: "Spearow"},
        { name: "Pikachu"},
    ],
    gyms: [
      { location: "Pewter City", completed: true, difficulty: 1 },
      { location: "Cerulean City", completed: true, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: [
        { name: "Easy" },
        { name: "Med"},
        { name: "Hard"},
    ]
        }
  console.dir(pokemon, { maxArrayLength: null })
  console.log(game)

game.party.splice(1, 1, {
    number: 5,
    name: 'Charmeleon',
    type: 'fire',
    hp: 58,
    starter: false
  })
  game.party.splice(2, 2, {
    number: 18,
    name: 'Pidgeot',
    type: 'normal',
    hp: 83,
    starter: false
  })
  game.party.splice(3, 3, {
    number: 22,
    name: 'Fearow',
    type: 'normal',
    hp: 65,
    starter: false
  })
game.party.splice(4, 4, {
    number: 26,
    name: 'Raichu',
    type: 'electric',
    hp: 60,
    starter: false
  })
  //console.log(game.party);

  
  //console.dir(game.party, { maxArrayLength: null })
 
  /*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/


//console.dir(pokemon.names,{ maxArrayLength: null })

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
//game.catchPokemon = {pokemonObj} 
    function processObject(pokemonObj) {
    };


    //myFunction(items);
    //console.log(items.name);    
    //game.party = [{ name: 'Charmander' },
       // { name: 'Podgeotto' },
       // { name: 'Spearow' },
      //  { name: 'Pikachu' },
      //  { name: 'pokemonObj' }, ]
  

    
    
    //catchPokemon: function(pokemonObj) {
        //console.log("pokemonObj:");


//game.catchPokemon();
//game.catchPokemon = { pokemonObj }
  
        //console.log(game.catchPokemon)

    /*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

//}
//console.log(game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.party = {
    name: "difficulty",
    value: "easy", 
    value: "Med", 
    value: "hard",
};
game.newProperty = "new value";

//console.log(game.difficulty)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

game.gyms = [
    { location: 'Pewter City', completed: true, difficulty: 1 },
    { location: 'Cerulean City', completed: true, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ];
  game.gyms[0].completed = true;
  game.gyms[1]. completed = true;

  //console.log(game.gyms)
  

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
game.gyms = [
    { location: 'Pewter City', completed: true, difficulty: 1 },
    { location: 'Cerulean City', completed: true, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ];
  game.gyms[0].completed = false;
  game.gyms[1].completed = false;
  game.gyms[2].completed = false;
  game.gyms[3].completed = false;
  game.gyms[4].completed = false;

  //console.log(game.gyms) }

  /*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

function tallyArray(gymTally) {
    const Tally = {completed, incomplete};

    for (const element of gyms) {
        tally[completed] = (tally[true] || 0) +1;
    }
    return tally;
}

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

//game.partyCount()

//partyCount(pokemon, game); {
    //let count = 0;
    //for (let i=0; i < pokemon.length; i++) {
        //if (pokemon[i] === game) {
        //}
    //}
    //return count;
//}

//onst data = ["number", "name", "type", "hp", "starter",]
//const numberOfParties = partyCount(data, "Pokemon");
//console.log(numberofParties);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms = [
    { location: 'Pewter City', completed: true, difficulty: 1 },
    { location: 'Cerulean City', completed: true, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ];
  game.gyms[0].completed = true;
  game.gyms[1].completed = true;
  game.gyms[2].completed = true;
  game.gyms[3].completed = true;
  game.gyms[4].completed = true;
  game.gyms[5].completed = true;
  game.gyms[6].completed = true;

  console.log(game.gyms)

  /*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

  console.log(game)

  /*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

function compareFn() {
    numbers.sort((a, b) => a-b);
    console.log(numbers)
}