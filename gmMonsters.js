const dropDown = document.getElementById('gm-monster')
console.log(dropDown);


export async function gmMonsterArray (url) {
    let response = await fetch(url);
    let data = await response.json();

    for (let i = 0; i < data.results.length; i++) {
        let element = data.results[i].name;
        console.log(element);
        dropDown.innerHTML += '<option value="' + element + '">' + element + '</option>'
    }
    return data;
  };
// gmMonsterArray('https://www.dnd5eapi.co/api/monsters/')