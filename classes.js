

import { players } from "./playerCharacter.js";
import { randomNumGen } from "./random.js";
import { hpFormatter, acFormatter, xpFormatter } from "./textFormatter.js";

export class Monsters {
    constructor(monster){
        this.hp = Number(hpFormatter(monster['Hit Points']));
        this.monsterName = monster.name;
        this.img = monster.img_url;
        this.attack = this.dealDamage
        this.armor = Number(acFormatter(monster['Armor Class']));
        this.strength = Number(monster.STR)
        this.xp = Number(xpFormatter(monster.Challenge))
    }
    takeDamage(damage){
        this.hp -= damage
        if (this.hp<0) {
            this.hp = 0
        }
    }
    dealDamage(){
        let random = new Randos
        return random.monsterDamage()
    }
    getName(){
        return this.monsterName
    }
    getHP(){
        return this.hp
    }
    getImg(){
        return this.img
    }
    
}

export class Heroes {
    constructor(character){
        this.heroName = undefined;
        this.class = character.name;
        this.hp = character.hp;
        this.attack = this.dealDamage
        this.img = character.img_url;
        this.xp = 0;
    }
    getName(){
        return this.class
    }
    getHP(){
        return this.hp
    }
    getImg(){
        return this.img
    }
    dealDamage(){
        let random = new Randos
        switch (this.class) {
            case 'archer':
            case 'warlock': 
            case 'cleric': 
                return random.lowHpDamage()
        
            case 'barbarian':
            case 'valkyrie':
                return random.highHpDamage()
        }
    }
    takeDamage(damage){
        this.hp -= damage
        if (this.hp<0) {
            this.hp = 0
        }
    }
    gainXP(xp){
        this.xp += xp
    }
    heal(){
        this.hp += 10
    }
}

export class GameState{
    constructor(){
        this.playerName = document.getElementById('player-name')
        this.playerImg = document.getElementById('player-image')
        this.playerHp = document.getElementById('player-hp')
        this.monsterName = document.getElementsByClassName('monster-name')
        this.monsterIMG = document.getElementsByClassName('monster-image')
        this.monsterHP = document.getElementsByClassName('monster-hp')

        this.level = 1;
        this.lives = 3;
        this.lastPick = undefined;
        this.target = undefined
        this.player = undefined
        this.currentMonsters = undefined
    }
    currentLives(){
        return this.lives
    }
    currentLevel(){
        return this.level
    }
    levelUp(){
        this.level += 1
    }
    loseLife(){
        this.lives -= 1
    }
    gainLife(){
        this.lives += 1
    }
    chooseChar(val){
        if (this.lastPick) {
            this.lastPick.classList.remove('is-selected')
        }
        val.classList.add('is-selected')
        this.lastPick = val
    }
    chosenChar(){
        return this.lastPick
    }
    chooseTarget(val){
        if (this.target) {
            this.target.classList.remove('is-selected')
        }
        val.classList.add('is-selected')
        this.target = val
    }
    chosenTarget(){
        return this.target
    }
    playerPop(player){
        let hero;
        switch (player) {
            case 'Archer':
                hero = players[0]
                break;
            case 'Barbarian':
                hero = players[1]
                break;
            case 'Warlock':
                hero = players[2]
                break;
            case 'Cleric':
                hero = players[3]
                break;
            case 'Valkyrie':
                hero = players[4]
                break;
        }
        this.player = new Heroes(hero)
        this.playerName.textContent = this.player.getName()
        this.playerImg.src = this.player.getImg()
        this.playerHp.textContent = this.player.getHP()
    }
    monsterPop(monsters){
        let arr = []
        for (let i = 0; i < monsters.length; i++) {
            const element = new Monsters(monsters[i]);
            this.monsterName[i].textContent = element.getName()
            this.monsterHP[i].textContent = element.getHP()
            this.monsterIMG[i].src = element.getImg()
            arr.push(element)
        }
        this.currentMonsters = arr
    }
    getMonsters(){
        return this.currentMonsters
    }
    updateHP(){
        this.playerHp.textContent = this.player.getHP()
        for (let i = 0; i < this.currentMonsters.length; i++) {
            const element = this.currentMonsters[i];
            this.monsterHP[i].textContent = element.getHP()
            
        }
    }
}

export class monsterWar{
    constructor(){
        this.allMonsters = undefined
        this.lvl1 = []
        this.lvl2 = []
        this.lvl3 = []
        this.lvl4 = []
        this.lvl5 = []
    }
    async getMonsters(){
        const apiUrl = 'https://gist.githubusercontent.com/tkfu/9819e4ac6d529e225e9fc58b358c3479/raw/d4df8804c25a662efc42936db60cfbc0a5b19db8/srd_5e_monsters.json'
        let response = await fetch(apiUrl);
        let data = await response.json();
        this.allMonsters = data
    }
    sortMonsters(){
        for (let i = 0; i < this.allMonsters.length; i++) {
            const element = this.allMonsters[i];
            let hp = Number(hpFormatter(element['Hit Points']))
            if (hp<=50) {
            this.lvl1.push(element)
            } else if (hp<=100) {
            this.lvl2.push(element)
            } else if (hp<=150) {
            this.lvl3.push(element)
            } else if (hp<=200) {
            this.lvl4.push(element)
            } else {
            this.lvl5.push(element)
            }
        }
    }
    getLvlMonsters(lvl){
        let arr = []
        switch (lvl) {
            case 1:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = randomNumGen(this.lvl1.length)
                    arr.push(this.lvl1[randomSelect])
                }
                return arr
                break;
            case 2:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = randomNumGen(this.lvl2.length)
                    arr.push(this.lvl2[randomSelect])
                }
                return arr
                break;
            case 3:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = randomNumGen(this.lvl3.length)
                    arr.push(this.lvl3[randomSelect])
                }
                return arr
                break;
            case 4:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = randomNumGen(this.lvl4.length)
                    arr.push(this.lvl4[randomSelect])
                }
                return arr
                break;
            case 5:
                for (let i = 0; i < 3; i++) {
                    let randomSelect = randomNumGen(this.lvl5.length)
                    arr.push(this.lvl5[randomSelect])
                }
                return arr
                break;
        }
    }
}

export class Randos{
    constructor(){
    }
    monsterDamage(hp){
        return Math.floor(Math.random() * (hp * .2)+ 1)
    }
    lowHpDamage(){
        let num = Math.floor(Math.random() * 15) + 1
        return num
    }
    highHpDamage(){
        let num = Math.floor(Math.random() * 8) + 1
        return num
    }
    dice(num, face){
        let roll =0;
        for (let i = 0; i < num; i++) {
            roll += Math.floor(Math.random()*face)
        }
        return roll
    }
    checkDice(){
        let checks = []
        for (let i = 0; i < 3; i++) {
            checks.push(Math.floor(Math.random()*20))   
        }
        return checks
    }
}

export class Attack{
    constructor(char){
        this.random = new Randos
        this.playerAttackCheck = this.random.checkDice()
        this.playerDefenseCheck = this.random.checkDice()
        this.monsterAttackCheck = this.random.checkDice()
        this.monsterDefenseCheck = this.random.checkDice()
    }
    whoAttacks(state, mon){
        for (let i = 0; i < 3; i++) {
            if (this.playerAttackCheck[i] > this.monsterDefenseCheck[i] && mon[i].getName() === state.chosenTarget().children[0].textContent) {
                mon[i].takeDamage(state.player.dealDamage())
            }
            if (this.playerDefenseCheck[i] < this.monsterAttackCheck[i]) {
                state.player.takeDamage(this.random.monsterDamage(mon[i].getHP()))
            }
        }
        state.updateHP()
    }
}
