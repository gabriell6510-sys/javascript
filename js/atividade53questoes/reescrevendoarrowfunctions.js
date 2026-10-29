function calcularCubo(numero) {
    return numero * numero * numero;
}
function verificarPar(numero) {
    return numero % 2 === 0;
}
function criarMensagem(nome) {
    return `Bem-vindo, ${nome}!`;
}

// a) Utilize cada função em uma chamada.
calcularCubo(3); 
verificarPar(4);
criarMensagem("Gabriel");
// b) Reescreva as funções que possuem apenas uma expressão de retorno usando a forma 
// reduzida.
const calcularCubo = (numero) => numero * numero * numero;
const verificarPar = (numero) => numero % 2 === 0;
const criarMensagem = (nome) => `Bem-vindo, ${nome}!`;
// c) Explique a diferença visual entre uma função tradicional e uma arrow function.
//A versao com arrow function é menor que a tradicional, e não precisa da palavra "function" e nem das chaves, caso tenha apenas uma linha de código.
