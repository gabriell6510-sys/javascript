let nomes = ["Ana", "Bruno", "Carla"];
let status = [false, true, false];
nomes.push("Daniel");
status.push(true);
nomes.splice(1, 1);
console.log(nomes);
console.log(status);
// Enunciado: o sistema representa pessoas e seus estados por meio de arrays paralelos. Após 
// uma exclusão, os dados deixam de corresponder corretamente.
// 1. Execute o código e observe os arrays.
// Ao executar o código original, o array nomes sofre a remoção do elemento no índice 1 ("Bruno"), ficando com ["Ana", "Carla", "Daniel"]
// 2. Identifique a causa do problema.
// O problema ocorre porque o método .splice(1, 1) foi aplicado exclusivamente ao array nomes, ignorando o array status
// 3. Corrija o processo de exclusão para remover a pessoa e o estado da mesma posição.
// let nomes = ["Ana", "Bruno", "Carla"];
// let status = [false, true, false];

// nomes.push("Daniel");
// status.push(true);

// let indiceParaRemover = 1; // Índice do "Bruno"

// // Correção: remover o elemento de ambos os arrays paralelos na mesma posição
// nomes.splice(indiceParaRemover, 1);
// status.splice(indiceParaRemover, 1);

// console.log(nomes);   // [ 'Ana', 'Carla', 'Daniel' ]
// console.log(status);  // [ false, false, true ]
// 4. Explique por que os dois arrays precisam ser atualizados juntos
// Os dois arrays representam informações paralelas sobre as mesmas entidades (pessoas e seus estados). Se apenas um array for atualizado, a correspondência entre os elementos dos dois arrays será perdida, resultando em dados inconsistentes. Portanto, é essencial atualizar ambos os arrays simultaneamente para manter a integridade das informações.