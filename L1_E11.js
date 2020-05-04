var rs =  require('readline-sync')

var nota1 = rs.questionInt('Qual a primeira nota ? ')
var nota2 = rs.questionInt('Qual a segunda nota ? ')
var nota3 = rs.questionInt('Qual a terceira nota ? ')
var total = nota1 + nota2 + nota3
var media = total/3
console.log(total)
console.log(media)
if(media >= 7){
console.log('voce foi aprovado')
}else{
console.log('voce foi reprovado')
}
