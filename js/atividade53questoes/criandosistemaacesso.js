const { question } = require("readline-sync");

let nome = question("Digite o seu nome: ");
let quantidade_horas = Number(question("Digite a quantidade de horas: "));

if (nome !== '' && quantidade_horas >= 4) {
    console.log(`O acesso de ${nome} foi permitido`)
}
else if (nome !== '' && quantidade_horas < 4) {
    console.log(`Acesso negado`)
} else {
    console.log("Informacoes invalidas.")
}