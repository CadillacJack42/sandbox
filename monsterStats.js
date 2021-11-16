export async function monsterStats (url, arr) {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);

    let monster = {}

    monster.name = data.name
    monster.actions = data.actions
    monster.armor_class = data.armor_class
    monster.challenge_rating = data.challenge_rating
    monster.condition_immunities = data.condition_immunities
    monster.damage_resistances = data.damage_resistances
    monster.hit_points = data.hit_points
    
    monster.xp = data.xp

    arr.push(monster)
    return monster;
  };