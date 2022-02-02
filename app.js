const calculadora = require('./calculadora')



console.log('O valor da soma é igual a: ' + calculadora.soma(10, 20))
let resultado = calculadora.mult(10, 10)
const resultadoSub = calculadora.sub(20, 40)
console.log('O valor da divisão é igual a: ' + calculadora.div(10, 2))
console.log('O valor da multiplicação é igual a: ' + resultado)
console.log('O valor da subtração é igual a: ' + resultadoSub)
console.log('Criado por ' + calculadora.nome)





















/*var mostrarSite = true
const site = "https://www.guiadoprogramador.com/"

console.log("Hello, World!")
console.log("Meu nome é João Marcos!")
console.log("E eu estou aprendendo Node.js com o Guia do Programador")

if(mostrarSite){ // Se mostrar site
    console.log(site) // Printe o site
}*/