/*
Faça um programa que calcule a potência (potenciação) de um número.
Para isso ele deve receber dois números de entrada: o primeiro número é a base da
potência, o segundo número será a potência.
EX: usuário inseriu 2 para base e 4 para potência.
O programa imprime :
16
Lembrando: 2

4 = 2*2*2*2

*/

var rs = require('readline-sync')

var numeroBase = rs.questionInt('Qual o numero base? ')
var numeroPotencia = rs.questionInt('Qual numero potencia? ')

var resultado = 1
var cont = 0
while (cont < numeroPotencia) {
    resultado = resultado * numeroBase
    cont++;
}
console.log(resultado)
/* ****************************************** 
outra maneira de ter feito
*/
var potencia = numeroBase ** numeroPotencia
console.log(potencia)
