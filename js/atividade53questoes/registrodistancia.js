const { question } = require('readline-sync');

console.log('==== Distancia percorrida =====');

let lista = [];
let somar_distancia = 0;
let maior_distancia = 0;

let trecho_registrado = Number(question('Quantos trechos foram registrados: '));

for (let i = 0; i < trecho_registrado; i++) {
  let distancia_percorrida;

  while (true) {
    distancia_percorrida = Number(question(`Digite a distancia percorrida do trecho ${i + 1}: `));

    if (distancia_percorrida > 0) {
      break; 
    } else {
      console.log('Valor invalido, tente novamente');
    }
  }

  lista.push(distancia_percorrida);
  somar_distancia += distancia_percorrida;

  if (distancia_percorrida > maior_distancia) {
    maior_distancia = distancia_percorrida;
  }
}

console.log(`A distancia total percorrida foi: ${somar_distancia}`);
console.log(`A maior distancia foi a de: ${maior_distancia}`);
