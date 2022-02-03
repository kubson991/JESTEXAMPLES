const fetch = require('node-fetch');

export async function api(url){
    return await fetch(url) 
   
}

api('https://rickandmortyapi.com/api/character').then(
    data=>data.json()).then(data=>
        console.log(data.results))