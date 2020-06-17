var rs = require ('readline-sync')

    var inicial = rs.questionInt('Qual numero inicial ? ')
    var final = rs.questionInt('Qual numero final ? ')

    for ( var i = inicial; i <= final; i++ ){
        console.log(i)
    }