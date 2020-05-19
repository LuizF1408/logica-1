var rs = require('readline-sync')

var num1 = rs.questionInt('numero 1:')
var num2 = rs.questionInt('numero 2:')
var num3 = rs.questionInt('numero 3:')

var numMaior = 0
var numMeio = 0
var numMenor = 0


if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
        numMeio = num2
        numMaior = num3
    }
    numMenor = num1
} else if (num2 < num3 && num2 < num1) {
    if (num1 > num3) {
        numMeio = num3
        numMaior = num1

    }
    numMenor = num2
} else if (num3 < num1 && num3 < num2) {
    if (num1 > num2) {
        numMeio = num2
        numMaior = num1

    }
    numMenor = num3
}
console.log(numMenor, numMeio, numMaior)
