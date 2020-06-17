var fs = require('fs')
var rs = require('readline-sync')
var hp = rs.questionInt ('qual o minimo de hp dos carros: ')

function numeroDeCarros(minimiHp, carros){
    var contadorDeCarros = 0;
    for ( var i = 0; i < carros.length; i++)
    var carro = carros[i];
    if (carro.Horsepower => minimiHp)
}

numeroDeCarros(hp, carros) {
    var carrosComHpMinimo = carros.filter(
        function (carro) {
            if (carro.Horsepower >= minimiHp){
                return true
            }
            return false
        }
    )
}