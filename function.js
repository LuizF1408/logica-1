// var rs = require('readline-sync')
// function Tabuada(n){
//     var imprime = []
//  for(var i = 1; i <= n; i++){
//      var tabu = i*n
//      imprime.push(`${i} x ${n} = ${tabu}`)
//  }
//  return imprime
// }
// var num = rs.questionInt ("Digite um numero  ")
// var tabuada = Tabuada(num)
// console.log(tabuada.join("\n"))

//************************************************** */
var rs = require('readline-sync')
function Tabuada(n){
    var imprime = []
 for(var i = 1; i <= n; i++){
     var tabu = i*n
     console.log(`${i} x ${n} = ${tabu}`)
 }
} var num = rs.questionInt ("Digite um numero  ")
var tabuada = Tabuada(num)

