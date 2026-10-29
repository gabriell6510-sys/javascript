const require = require("readline-sync");

function mensagemBoasVindas() {
    console.log("Bem-vindo ao programa!");
}
function converterMinutosParaSegundos(minutos) {
    return minutos * 60;
}

function verificarNumeroPar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é um número par.");
    } else {
        console.log(numero + " é um número ímpar.");
    }
}
while (true) {
    console.log("1 -  Consulte uma mensagem de boas-vindas.");
    console.log("2 -   Converta minutos em segundos.");
    console.log("3 -  verifique se um número é par.");
    console.log("4 -  Encerre a aplicacao.");
    let opcao = Number(require.question("Escolha uma opcao de 1 a 4: "));
    switch (opcao) {
        case 1:
            mensagemBoasVindas();
            break;

        case 2:
            let minutos = Number(require.question("Digite o número de minutos: "));
            let segundos = converterMinutosParaSegundos(minutos);
            console.log(minutos + " minutos equivalem a " + segundos + " segundos.");
            break;
        case 3:
            let numero = Number(require.question("Digite um número: "));
            verificarNumeroPar(numero);
            break;
        case 4:
            console.log("Encerrando a aplicação.");
            break;

        default:
            console.log("Opção inválida. Por favor, escolha uma opção de 1 a 4.");
    }
}
