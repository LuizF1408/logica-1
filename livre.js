var fs= require("fs")
var caminhoObj = "data/carro.json"
var objDes = fs.readFileSync(caminhoObj)
var carro = JSON.parse(objDes)
console.log(carro)

