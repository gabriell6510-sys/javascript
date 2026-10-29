let contador = 0;
for (let i = 1; i < 10; i--) {
 contador++;
}
console.log(`Quantidade: ${contador}`);
// Enunciado: o programa deveria contar de 1 até 10, mas não funciona como esperado.
// 1. Identifique o problema na repetição.
// O contador foi configurado para diminuir o valor de i (1, 0, -1, -2...), em vez de o aumentar.
// 2. Corrija a condição e o incremento.
// Para que o loop conte corretamente de forma progressiva, o operador de decremento (i--) deve ser substituído pelo operador de incremento (i++), e a condição deve ser ajustada para incluir o limite desejado (i <= 10).
// 3. Faça o programa apresentar a quantidade de números percorridos.
// let contador = 0;

// Corrigido para incrementar (i++) e ir até 50 (i <= 50)
// for (let i = 1; i <= 50; i++) {
//     contador++;
// }

// console.log(`Quantidade de números percorridos: ${contador}`);
// 4. Modifique o código para contar de 1 até 50
// let contador = 0;

// // Corrigido para incrementar (i++) e ir até 50 (i <= 50)
// for (let i = 1; i <= 50; i++) {
//     contador++;
// }

// // Apresenta a quantidade de números percorridos
// console.log(`Quantidade de números percorridos: ${contador}`);