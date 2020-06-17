class Carro {
    constructor(nome, modelo, cor){
     this.nome = nome
     this.modelo = modelo
     this.cor = cor
    }

}
var rs = require('readline-sync')

function criarCarro(){
    var nome = rs.question(" nome do carro? ")
    var modelo = rs.question(" qual o modelo do carro? ")
    var cor = rs.question("qual a cor do carro? ")
}
