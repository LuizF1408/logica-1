var rs = require('readline-sync')

var genero = rs.questionInt('Digite [1] para feminino e [2] para marculino: ')
var altura = rs.question('qual sua altura ?')
var homem = 72.7 * altura
var mulher = 62.1 * altura

if (genero = 1){
    console.log('seu peso ideal é:',mulher.toFixed(2) - 44.7)
}else{
    console.log('seu peso ideal é :',homem.toFixed(2) - 58)
}