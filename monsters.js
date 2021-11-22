
import { randomNumGen } from "./random.js";

const apiUrl = 'https://gist.githubusercontent.com/tkfu/9819e4ac6d529e225e9fc58b358c3479/raw/d4df8804c25a662efc42936db60cfbc0a5b19db8/srd_5e_monsters.json'


export async function monsterArray () {
    let arr = []
    let response = await fetch(apiUrl);
    let data = await response.json();
    // console.log(data);
    for (let i = 0; i < 3; i++) {
      let rdmNum = randomNumGen(data.length)
      arr.push(data[rdmNum])
    }
    return arr;
  };

let lvl1 = []
let lvl2 = []
let lvl3 = []
let lvl4 = []
let lvl5 = []

const monsterSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let hp = Number(hpFormatter(element['Hit Points']))
    if (hp<=50) {
      lvl1.push(element)
    } else if (hp<=100) {
      lvl2.push(element)
    } else if (hp<=150) {
      lvl3.push(element)
    } else if (hp<=200) {
      lvl4.push(element)
    } else {
      lvl5.push(element)
    }
  }
}
