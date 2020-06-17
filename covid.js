const apiDoCovid = 'https://covid19-brazil-api.now.sh/api/report/v1'

const axios = require('axios')

const rs = require('readline-sync')
var nomeDoEstado = rs.question('Digite a UF do estado: ')

axios.get(apiDoCovid)
    .then(function (resposta) {
        const dadosPorEstados = resposta.data.data
        for (var i = 0; i < dadosPorEstados.length; i++) {
            const uf = dadosPorEstados[i]
            if (uf.uf == nomeDoEstado) {
                console.log(uf)
            }
        }

    })