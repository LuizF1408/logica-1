var rs = require('readline-sync')

var cofrinho = rs.questionInt('quanto voce tem no cofrinho ? ')
console.log(cofrinho)

var compra = rs.question('oque você quer comprar ?')
console.log(compra)
var preço = rs.questionInt('quanto custa ? ')
console.log(preço)


if (cofrinho<preço){
    console.log('voce nao tem dinheiro suficiente')
}else{
    console.log('obrigado e volte sempre')
}
