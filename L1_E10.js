var rs = require('readline-sync')

var numero = rs.questionInt('Digite um numero: ')

if(numero > 100 || numero < 200){
    console.log('voce digitou um numero entre 100 e 200')
}else{
    console.log('voce digitou um numero fora da faixa de 100 e 200')
}