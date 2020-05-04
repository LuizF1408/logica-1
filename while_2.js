var rs = require('readline-sync')

var num1 = rs.questionInt('qual o numero 1: ');
var num2 = rs.questionInt('qual o numero 2: ');

var resultado = 0;
var contador = 0;
while (contador < num2){
    resultado = num1 + resultado
    contador++;
}

console.log(resultado)
