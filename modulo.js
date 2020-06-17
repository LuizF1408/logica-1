function calculaMedia(numerosRecebidos){
    var soma = 0
    for (var i = 0; i < numerosRecebidos.length; i++){
        soma = soma + numerosRecebidos[i]
    }
    var media = soma / numerosRecebidos.length
    return media
}

module.exports = calculaMedia()