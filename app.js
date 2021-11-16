import { gmMonsterArray } from "./gmMonsters.js"
import { players } from "./playerCharacter.js"

const monsterArray = document.getElementById('gm-monster')
console.log(monsterArray.item([0]));

const getMonsters = document.getElementById('gm-roll')
console.log(getMonsters);

console.log(players);

// getMonsters.addEventListener('click', {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//     }
// })

// testFunc('https://www.dnd5eapi.co/api/monsters/barbed-devil')
// testFunc('https://www.dnd5eapi.co/api/monsters/')


gmMonsterArray('https://www.dnd5eapi.co/api/monsters/')

