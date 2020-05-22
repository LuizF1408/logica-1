var rs = require('readline-sync')

var n = rs.questionInt('digite um numero para quantidade de asterisco: ')
var cont = 1

while(cont <= n) {

    var cont2 = 1
    var estrela = ""
    while(cont2 <= cont) {
        estrela = estrela + "*"

        cont2++
    }

    console.log(estrela)
    cont++
}
