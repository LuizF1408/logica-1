const axios = require('axios')
const rs = require('readline-sync')
const apipoke = "https://pokeapi.co/api/v2/pokemon/"

var nomeDoPokemon = rs.question('Coloque o nome ou o numero do pokemon que quer: ')

axios.get(apipoke)
.then((resposta) => {
   var dadosDoPoke = resposta.data
    // console.log(dadosDoPoke)
    for(var i = 0; i < dadosDoPoke.length; i++){
        const pokemon = dadosDoPoke[i]
        console.log(pokemon)
        if(pokemon.name == nomeDoPokemon)
        console.log(pokemon)
    }
})