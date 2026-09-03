
// opgave 1
// const cardSettings = {
//     name: "gisa and geralf",

//     image: "gisa and geralf batteling monsters",

//     types: "creature human wizard",

//     abilities: "when gisa and geralf enters mill 4 cards, once during each of your turns you may play a zombie card from your graveyard",

//     stats: "4 power / 4 toughness",

// }

// console.log(cardSettings.name);
// console.log(cardSettings.types);
// console.log(cardSettings.abilities);
// console.log(cardSettings.stats);

// opgave 2
const cardSettings2 = {
    name: "gisa and geralf",

    image: true,

    types: ["creature", "Human", "wizard"],

    abilities: { 
        abilitie1: "when gisa and geralf enters the battlefield mill four cards",

        abilitie2: "once during each of your turns you may cast a zombie spell from your graveyard",

    },

    power: 4,

    toughness: 4,

}

console.log(cardSettings2.name);

cardSettings2.types.forEach(function(types) {
    console.log(types)

});

console.log(cardSettings2.abilities.abilitie1);
console.log(cardSettings2.abilities.abilitie2);