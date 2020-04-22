// capturar números do usuário
var readlineSync = require('readline-sync'); //chama pacote de entrada do usuário

var numero1 = readlineSync.question('Insira o numero 1 ?' );  //lê entrada de usuário
var numero2 = readlineSync.question('Insira o numero 2 ?' )   //lê entrada de usuário

if(numero1>numero2){
    console.log('numero : ' + numero1 + ' é maior ') //se numero1 for maior
} else if (numero1<numero2){
    console.log('numero : ' + numero2 + ' é maior ') //se numero2 for maior
}else{
    console.log('os números são iguais!') //se não é maior nem menor então são iguais
}
