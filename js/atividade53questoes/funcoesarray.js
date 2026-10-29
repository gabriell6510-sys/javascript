let numeros = [12,7,24,9,31,18,5,42];
function Soma(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

function contarPares(numeros) {
    let quantidadepares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            quantidadepares++;
        }
    }
    return quantidadepares;
}

function encontrarMaior(numeros) {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}

function buscarNumero(numeros, valor) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valor) {
            return i;
        }
    }
    return false;
}

console.log("Soma dos elementos:", calcularSoma(numeros));
console.log("Quantidade de números pares:", contarPares(numeros));
console.log("Maior elemento:", encontrarMaior(numeros));
console.log("O valor 24 existe no array?", buscarNumero(numeros, 24));
console.log("O valor 10 existe no array?", buscarNumero(numeros, 10));