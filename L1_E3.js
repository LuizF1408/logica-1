var rs = require('readline-sync')

var Senha = rs.question('Digite Sua Senha: ')

if(Senha !== '1234'){
console.log('Acesso Negado')
}else{
    console.log('Acesso Permitido')
}