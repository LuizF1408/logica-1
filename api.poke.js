const api = 'http://pokeapi.co/api/v2/${}'

const axios = require('axios')


axios.get(api + '/pokemon')
.then((resposta) => {
    console.log(Sucesso)
    var pokeData = resposta.data.name
    var primeiroHabilidade = pokeData.abilities[0].ability
    console.log(primeiroHabilidade.name)
    axios.get(primeiroHabilidade.url)
    .then((respotaHabilidade)=> {
        var abilityData = respotaHabilidade.data
        var primeiroEfeito = abilityData.effect_entries[0]
        console.log(primeiroEfeito.effect)
    })
})
.catch((erro) => {
    console.log(erro)
})