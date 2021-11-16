const dropDown = document.getElementById('gm-monster')

export async function gmMonsterArray (url) {
    let arr = []
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    for (let i = 0; i < data.results.length; i++) {
      arr.push(data.results[i])
      
    }
    console.log(arr);
    return arr;
  };
