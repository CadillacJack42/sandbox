
//  Imports For Various Operations
import { Attack, GameState, Heroes, Monsters, monsterWar, Populate, Randos } from "./classes.js";
import { players } from "./playerCharacter.js"

//  Get Attack And Heal Buttons
const attack = document.getElementById('attack')
const heal = document.getElementById('heal')

//  Create New Instance Of Random Number Gens
const random = new Randos

//  Create Blank Variables To Hold Arrays Of Monsters Based On HP
const monsterOpponents = new monsterWar;

//  API Call to Get All Available Monsters
await monsterOpponents.getMonsters()

//  Sort Monsters Into Proper Arrays Based On HP
monsterOpponents.sortMonsters()

//  Test Variable To Populate Monsters !!!---REMOVE AFTER LOGIC---!!!
const lvlList1 = monsterOpponents.getLvlMonsters(4)

//  Create New Instance Of State For Game
const game = new GameState

//  Create New Instance Of Random Number Generators
const pops = new Populate

//  Get Rules Pane
const rules = document.getElementById('rules')

//  Get Character Selection Pane 
const characterselection = document.getElementById('chooser-id')

//  Get All Character Class Choices
const playerChoices = document.getElementsByClassName('char')

//  Get "Choose Your Hero" Button From Character Selection Pane
const characterChoice = document.getElementById('pick-char-button')


// Hide Rules Pane, Display Character Selection Pane
rules.addEventListener('click', () => {
    rules.classList.add('visibility')
    characterselection.classList.remove('visibility')
})
// Character Select Archer Event Listener
playerChoices[0].addEventListener('click', () => {
    game.chooseChar(playerChoices[0])
})
// Character Select Barbarian Event Listener
playerChoices[1].addEventListener('click', () => {
    game.chooseChar(playerChoices[1])
})
// Character Select Warlock Event Listener
playerChoices[2].addEventListener('click', () => {
    game.chooseChar(playerChoices[2])
})
// Character Select Cleric Event Listener
playerChoices[3].addEventListener('click', () => {
    game.chooseChar(playerChoices[3])
})
// Character Select Valkyrie Event Listener
playerChoices[4].addEventListener('click', () => {
    game.chooseChar(playerChoices[4])
})
//  Choose Character, Hide Character Selection Pane,
//  Populate Player and Monster Tiles In Game
characterChoice.addEventListener('click', () => {
    let char = game.chosenChar().children[0].textContent
    pops.playerPop(char)
    pops.monsterPop(lvlList1)
    characterselection.classList.add('visibility')
})
//  Listener For Attack Button
attack.addEventListener('click', () => {
    attack = new Attack
    attack.whoAttacks()
})


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  THIS IS WHERE WE ARE WORKING
//  REFERENCE CLASSES/ATTACK.WHOATTACKS()
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const checks = () => {
//     const monsters = document.getElementsByClassName('monster')
//     let attacks = new Attack()
//     let player = game.chosenChar().children[0].textContent
//     for (let i = 0; i < monsters.length; i++) {
//         const element = monsters[i];
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  THIS IS WHERE WE ARE WORKING
//  REFERENCE CLASSES/ATTACK.WHOATTACKS()
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        
//     }
// }