
//  Imports For Various Operations
import { Attack, GameState, monsterWar, Randos } from "./classes.js";

//  Get Attack And Heal Buttons
const attackBtn = document.getElementById('attack')
const healBtn = document.getElementById('heal')

//  Get Monster Tiles
const monster1 = document.getElementById('monster-01')
const monster2 = document.getElementById('monster-02')
const monster3 = document.getElementById('monster-03')

//  Get Rules Pane
const rules = document.getElementById('rules')

//  Get Character Selection Pane 
const characterselection = document.getElementById('chooser-id')

//  Get All Character Class Choices
const playerChoices = document.getElementsByClassName('char')

//  Get "Choose Your Hero" Button From Character Selection Pane
const characterChoice = document.getElementById('pick-char-button')

//  Create New Instance Of Random Number Gens
const random = new Randos

//  Create Blank Variables To Hold Arrays Of Monsters Based On HP
const monsterOpponents = new monsterWar;

//  API Call to Get All Available Monsters
await monsterOpponents.getMonsters()

//  Sort Monsters Into Proper Arrays Based On HP
monsterOpponents.sortMonsters()

//  Test Variable To Populate Monsters !!!---REMOVE AFTER LOGIC---!!!
const lvlList1 = monsterOpponents.getLvlMonsters(1)

//  Create New Instance Of State For Game
const game = new GameState

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
    let player = game.chosenChar().children[0].textContent
    game.playerPop(player)
    game.monsterPop(lvlList1)
    characterselection.classList.add('visibility')
})
//  Listener To Target Monster1 For Attack
monster1.addEventListener('click', () => {
    game.chooseTarget(monster1)
})
//  Listener To Target Monster2 For Attack
monster2.addEventListener('click', () => {
    game.chooseTarget(monster2)
})
//  Listener To Target Monster3 For Attack
monster3.addEventListener('click', () => {
    game.chooseTarget(monster3)
})
//  Listener For Attack Button
attackBtn.addEventListener('click', () => {
    let attack = new Attack(game.player)
    attack.whoAttacks(game, game.getMonsters())
})
//  Listener For Heal Button
healBtn.addEventListener('click', () => {
    let attack = new Attack(game.player)
    attack.heal(game, game.getMonsters())
})
