const api = 'http://pokeapi.co/api/v2'

const axios = require('axios')
const rs = require('readline-sync')
const fs = require('fs')

var stop = false

while (stop != true) {



    var parametro = rs.question('Digite um ID ou nome do Pokemon: ')
    var pokemon = {
        nome: "",
        habilidades: [],
        tipos: [],
    }

    pegaPokemon();

    stop = !rs.keyInYN("Gostaria de pesquisar outro pokemon? ")

}

function salvarPokemon() {
    var pokemons = []
    var opcao = rs.keyInYN('gostaria de guardar na sua pokedex local? ')
    if (opcao) {
        pokemons = JSON.parse(fs.readFileSync("./pokemons.json"))
        pokemons.push(pokemon)
        fs.writeFileSync("./pokemons.json", JSON.stringify(pokemons))
    }

}

function pegaPokemon() {
    axios.get(`${api}/pokemon/${parametro}`)
        .then((resposta) => {
            insereHabilidades(resposta.data.abilities)
            insereTipos(resposta.data.types)
            pokemon.nome = resposta.data.name
            // console.log(resposta.data)
            console.log(pokemon)
            salvarPokemon()
        })
        .catch((erro) => {
            console.log(erro)
        })
}



function insereHabilidades(habilidades) {

    for (var i = 0; i < habilidades.length; i++) {
        pokemon.habilidades.push(habilidades[i].ability.name)

    }

}

function insereTipos(tipos) {
    for (var i = 0; i < tipos.length; i++) {
        pokemon.tipos.push(tipos[i].type.name)
    }
}