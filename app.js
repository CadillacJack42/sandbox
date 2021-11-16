import { gmMonsterArray } from "./gmMonsters.js"
import { populator } from "./populateGmMonsters.js"

const monsterArray = document.getElementById('gm-monster')
const gmAddBtn = document.getElementById('gm-add')
const chosenMonsters = document.getElementById('chosen-monsters')
const getMonsters = document.getElementById('gm-roll')

let fullMonsterArr = await gmMonsterArray('https://www.dnd5eapi.co/api/monsters/')

// let monsterArr = []
gmAddBtn.addEventListener('click', () => {
    populator(fullMonsterArr)
    console.log(fullMonsterArr);
    
})