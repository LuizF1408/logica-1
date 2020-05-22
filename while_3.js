var rs = require('readline-sync')

var num1 = rs.questionInt('qual o numero 1: ');


var cont = 0;
while (cont < num1){
    var resto = cont %2
    if(resto == 0 ){
        console.log(cont)
    }
    cont++;
}

console.log(num1)