var rs = require('readline-sync')

var pergunta = rs.question('qual numero do ddi ? ')

if (pergunta == 1){
    console.log('Estados Unidos')
}else if (pergunta == 49){
    console.log('Alemanha')
}else if (pergunta == 54){
    console.log('Argentina')
}else if (pergunta == 55){
    console.log('Brasil')
}else if (pergunta == 35){
    console.log('Portugal')
}else{
    console.log('DDI ainda nao cadastrada')
}