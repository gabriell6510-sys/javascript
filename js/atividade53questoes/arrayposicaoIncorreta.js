let animais = ["Gato", "Cachorro", "Coelho", "Papagaio"];
for (let i = 0; i < animais.length; i++) {
 console.log(`${i + 1} - ${animais[i]}`);
}
// Enunciado: o programa deveria listar todos os animais, mas também apresenta um resultado indesejado.
//  
// indesejado.
// Corrija o percurso do array e explique por que o último índice válido é diferente do tamanho 
// do array.
// O último índice válido de um array é sempre o tamanho do array menos 1, pois os índices começam em 0. Portanto, para percorrer corretamente o array, a condição do loop deve ser i < animais.length, garantindo que o loop pare antes de acessar um índice que não existe.
// let animais = ["Gato", "Cachorro", "Coelho", "Papagaio"];
// for (let i = 0; i < animais.length; i++) {
//  console.log(`${i + 1} - ${animais[i]}`);
// }
// Porque no sinal de < tinha o de =