export async function testFunc (url) {
    let response = await fetch(url);
    let data = await response.json();

    // Logs out {count: 319, results: Array(319)}
    // console.log(data)

    // Logs all 319 objects broken up into arrays of 100 length
    // console.log(data.results)

    //  Logs out object at first index of the 319 objects
    // console.log(data.results[0])

    //  Logs name attribute of object
    // console.log(data.results[0].name)

    // logs each key in the monster object
    // const keys = Object.keys(data)
    // console.log(data.results[0].index);
    // for (const key of keys){
    //     console.log(key);
    // }

    // Logs eack Value sored in monster object keys
    // const values = Object.values(data)
    // for (const value of values){
    //     console.log(key);
    // }

    return data;
  };