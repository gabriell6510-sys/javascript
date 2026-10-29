console.log("1 - Reproduzir musica");
console.log("2 - Pausar reproducao");
console.log("3 - Avançar aplicação");
console.log("4 - Encerrar aplicação");
const readline = require("readline-sync");
let opcao = Number(readline.question("Escolha uma opcao: "));

switch (opcao) {
    case 1:
        console.log("Reproduzir música");
        break;
    case 2:
        console.log("Pausar reprodução");
        break;
    case 3:
        console.log("Avançar aplicação");
        break;
    case 4:
        console.log("Encerrando...");
        break;
    default:
        console.log("Opção inválida");
}