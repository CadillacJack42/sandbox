import { newMonsterArray } from "./resetMonsters.js";

const characterSelection = document.getElementById(`chooser-id`);
const youWin = document.getElementById('you-win')
const youLose = document.getElementById('you-lose')
const combatText = document.getElementById('combat-text')


export const resetBtnListenerGenerator = (arr, fullMonsterArr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.addEventListener('click', () => {
            characterSelection.classList.remove('visibility')
            combatText.innerHTML = '<div class="combat-text" id="combat-text"></div>'
            newArr = newMonsterArray(fullMonsterArr)
            switch (i) {
                case 0:
                    console.log("THIS SHOULD RESET WIN, WHY NO WORK");
                    youWin.classList.add('visibility')
                    break;
                case 1:
                    console.log("THIS SHOULD RESET LOSE, WHY NO WORK");
                    youLose.classList.add('visibility')
                    break;
                default:
                    break;
            }
        })
    }
    return newArr
}