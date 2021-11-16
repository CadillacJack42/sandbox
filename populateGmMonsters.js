import { monsterStats } from "./monsterStats.js";
import { randomNumGen } from "./random.js";

export const populator = async (fullMonsterArr) => {
    console.log(fullMonsterArr);
    let monsterArr = []
    const url = 'https://www.dnd5eapi.co'

    for (let i = 0; i < 3; i++) {
        let rdmNum = randomNumGen(fullMonsterArr.length)
        let indicies = fullMonsterArr[rdmNum].url
        // console.log(indicies);
        await monsterStats(url + indicies, monsterArr);
    }
    console.log(monsterArr);
    console.log(monsterArr[0].actions);
    console.log(monsterArr[0].actions[0].damage);
    console.log(monsterArr[0].actions[0].damage[0].damage_dice);
}