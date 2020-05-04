var rs = require('readline-sync')

var maça = rs.questionInt('quantas macas voce quer comprar ? ')
var verda = maça * 0.30
var dade = maça * 0.25

if(maça < 11){
    console.log(verda.toFixed(2))
}else{
    console.log(dade.toFixed(2))
}