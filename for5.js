var rs = require('readline-sync')

while (true) {
    var num = rs.questionInt('Diga o numero para fatorial: ')
    var resultado = 1
    for (var i = 1; i <= num; i++) {
        resultado = resultado * i

    }
    console.log(resultado)

    var fatorial = rs.keyIn(' Deseja fazer outra fatorial? [Y] - Sim/ [N] - Não')
    if (fatorial == false) {
        break
    }                                                                           
}


/*
OUTRA MANEIRA DE FAZER O FATORIAL COM FUNCTION

function Fatorial(n){
    var n = rs.questionInt('qual numero de fatorial: ')
    var resultado = n
    for(var i = 1; i < n; i++){
        resultado = resultado * i
    }
    return resultado;
}
var total = Fatorial()
console.log(total)

*/


// var  rs  =  require ( 'readline-sync' ) ;
// for ( ; true ; ) {
// var  n  =  rs . questionInt ( "Digite um número para cálculo fatorial" )
//  var resultado =  1
// for ( var  i =  1 ;  i <= n ; i ++ ) {
//     resultado *  i ;

// }
// console . log ( resultado )
// var  q =  rs .keyIn ( "Você deseja continuar? \ n y - Sim \ n N - Nao" )
// if ( q  ==  false  ) {
//     break ;
// }
// }
