function calcularDobro(numero) {
    console.log(numero * 2);
}
let resultado = calcularDobro(10);
console.log(`Resultado armazenado: ${resultado}`);

// a) O que será apresentado no terminal?
//20
// Resultado armazenado: undefined
// b) Por que a variável resultado não armazena o dobro de 10?
//Porque a função utiliza apenas console.log() para mostrar o valor no ecrã, mas não possui a instrução return. Sem o return, a função não devolve nenhum valor para fora, fazendo com que a variável resultado fique vazia
// c) Reescreva a função utilizando return.
// function calcularDobro(numero) {
//     return numero * 2;
// }

// let resultado = calcularDobro(10);
// console.log(`Resultado armazenado: ${resultado}`);

// d) Faça o programa apresentar o dobro e o triplo do mesmo número, utilizando a função para 
// obter os resultados.

// function calcularDobro(numero) {
//     return numero * 2;
// }

// function calcularTriplo(numero) {
//     return numero * 3;
// }

// let numeroBase = 10;
// let dobro = calcularDobro(numeroBase);
// let triplo = calcularTriplo(numeroBase);

// console.log(`O dobro de ${numeroBase} é: ${dobro}`);
// console.log(`O triplo de ${numeroBase} é: ${triplo}`);