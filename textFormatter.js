export const hpFormatter = (str) => {
    for (let i = 0, hp = '' ; i < str.length; i++) {
        // let stringy = str['Hit Points']
        if (str[i] !== ' ') {
            hp += str[i]        
        } else {
            return hp
        } 
    }
}

export const acFormatter = (str) => {
    for (let i = 0, ac = '' ; i < str.length; i++) {
        if (str[i] !== ' ') {
            ac += str[i]        
        } else {
            return ac
        } 
    }
}

export const xpFormatter = (str) => {
    let start = str.indexOf('(') +1
    let stop = str.indexOf(')')
    for (let i = start, xp = '' ; i < stop; i++) {
        if (str[i] === ' ') {
            return xp
        } else {
            xp += str[i]
        }
    }
}