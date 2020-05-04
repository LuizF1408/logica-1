var rs = require('readline-sync')

var nome = rs.question('digite um nome: ')
var nome2 = nome.split('')

for(var i = 0; i <nome.length; i++ ){
    if(nome.charAt(i) === "o"){
        nome2[i] = nome.charAt(i).toUpperCase()
    }
}
console.log(nome2.join(''))