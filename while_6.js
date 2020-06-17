var rs = require('readline-sync')


var cont = 0
while (true) {
    var decisao = rs.question('Insira [0] para sair ou [1] para continuar: ')
    if (decisao == 0) {
        break
    }

    cont++
}