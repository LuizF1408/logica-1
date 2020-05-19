var rs = require('readline-sync')

var num1 = rs.questionInt('qual o numero 1: ');


var contador = 0;
while (contador < num1){
    if(num1 %2 == 0 ){
        console.log('E PAR')
    }
    contador++;
}

console.log(num1)