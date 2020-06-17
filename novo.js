const rs = require('readline-sync')
class Aluno {

}
function cadastrarAluno() {
    var nome = rs.question('qual seu nome: ')
    var idade = rs.questionInt('qual sua idade: ')
    return new Aluno(nome, idade)
}   

var alunos = []
for(var i = 0 ; i < 3; i++){
    var aluno = cadastrarAluno()
    aluno.push(aluno)
}
console.log(alunos)

function maiorIdadeAlunos(alunos){
    var nomeDosAlunos = []
    var maiorIdadeEncontrada = 0
    for(var i = 0; i < alunos.length; i++){
        if(alunos[i].idade > maiorIdadeEncontrada){
            maiorIdadeEncontrada = alunos[i].idade
        }
    }
    for (var i = 0; j < alunos.length; i++){
        if(alunos.idade[i] == maiorIdadeEncontrada ) {
            nomeDosAlunos.push(alunos[i].nome)
        }

    }
    return nomeDosAlunos
}

function maiorIdade ( aluno1, aluno2, aluno3){
    var idadeA = aluno.idade > aluno
}