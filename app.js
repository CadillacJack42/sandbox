import { GameState, Heroes, Monsters, monsterWar, Populate, Randos } from "./classes.js";
import { players } from "./playerCharacter.js"

const monsterOpponents = new monsterWar;
await monsterOpponents.getMonsters()
monsterOpponents.sortMonsters()

const lvlList = monsterOpponents.getLvlMonsters(4)
const lvlList1 = monsterOpponents.getLvlMonsters(4)
const lvlList2 = monsterOpponents.getLvlMonsters(1)

const game = new GameState

const user = new Heroes(players[0])

const monsterlist = []
for (let i = 0; i < lvlList2.length; i++) {
    const element = lvlList2[i];
    monsterlist.push(new Monsters(element)) 
}

const rdmNums = new Randos

const playerChoices = document.getElementsByClassName('char')
const rules = document.getElementById('rules')
const characterselection = document.getElementById('chooser-id')
const characterChoice = document.getElementById('pick-char-button')

rules.addEventListener('click', () => {
    rules.classList.add('visibility')
    characterselection.classList.remove('visibility')
})

playerChoices[0].addEventListener('click', () => {
    game.chooseChar(playerChoices[0])
})
playerChoices[1].addEventListener('click', () => {
    game.chooseChar(playerChoices[1])
})
playerChoices[2].addEventListener('click', () => {
    game.chooseChar(playerChoices[2])
})
playerChoices[3].addEventListener('click', () => {
    game.chooseChar(playerChoices[3])
})
playerChoices[4].addEventListener('click', () => {
    game.chooseChar(playerChoices[4])
})

let pops = new Populate

characterChoice.addEventListener('click', () => {
    let char = game.chosenChar().children[0].textContent
    pops.playerPop(char)
    characterselection.classList.add('visibility')
    pops.monsterPop(lvlList1)
})