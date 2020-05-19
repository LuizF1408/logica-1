var rs = require('readline-sync')

var salario = rs.questionInt('Qual e o seu salario ? ');
var taxa = salario * 0.3
console.log(taxa)
console.log(`Seu emprestimo pode ser de ate: ${taxa}`);
var prestacao = rs.questionInt('Quantas prestacoes? ')
var emprestimo = taxa / prestacao
console.log(`ficaria ${prestacao} de ${emprestimo}`)