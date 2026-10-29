function calcularDistancia(velocidade, tempo) {
 let distancia = velocidade * tempo;
}
calcularDistancia(60, 2)

// a) Identifique o problema relacionado ao escopo da variável.
// O problema é que a variável 'distancia' é declarada dentro da função, mas não é retornada, tornando-a indisponível fora da função.
// b) Explique por que a variável declarada dentro da função não está disponível diretamente 
// fora dela.
// A variável 'distancia' tem escopo local, ou seja, ela só existe dentro do bloco onde foi declarada (a função).

// c) Corrija a função para retornar a distância.
function calcularDistancia(velocidade, tempo) {
    let distancia = velocidade * tempo;
    return distancia;
}

// d) Armazene o resultado em uma variável e apresente a distância percorrida em quilômetros
let distanciaPercorrida = calcularDistancia(60, 2);
console.log(distanciaPercorrida);