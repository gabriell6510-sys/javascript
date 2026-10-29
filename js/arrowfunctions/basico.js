// Passado
// function somar(a,b) {
//     return a + b;
// }


//futuro
// const somarArrow = (a,b) => {
//     return a + b;
// }
// console.log(somarArrow(2,3));
// // =>(substitui o function,)

// const calcularQuadrado = (numero) =>
//     numero *  numero;
// console.log(calcularQuadrado(2)) // mais indicado pra ficar mais limpo o código

// const calcularQuadradoConciso = (numero) => {
//     return numero * numero;
// };

// console.log(calcularQuadradoConciso(2))

// //arrow function sem parametros
// const arrowFunction = () => {
//     console.log("Arrow function sem parametros");
// };
// arrowFunction();

// //arrow function com 1 parametro
// const arrowFunction1 = (nome) => {
//     console.log(`Bem vindo: ${nome}`);
// }
// console.log("Benedito");
//Calculadora(arrow function)
const somar = (a,b) => {console.log(`O resultado da soma de ${a} + ${b} e: ${a + b}`)};
const subtracao = (a,b) => {console.log(`O resultado da soma de ${a} - ${b} e: ${a - b}`)};
const multiplicar = (a,b) => {console.log(`O resultado da soma de ${a} x ${b} e: ${a * b}`)};
const divisao = (a,b) => b!== 0 ? console.log(`O resultado da divisao de ${a} / ${b} e: ${a / b}`) : console.log("A divisao nao pode ser realizada");
somar(10,5);
subtracao(10,5);
multiplicar(10,5);
divisao(10,5);