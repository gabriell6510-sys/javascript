const { question } = require("readline-sync");

let jogos = [
    "Minecraft",
    "Terraria",
    "Stardew Valley",
    "Hollow Knight",
    "Celeste"
];
console.log(jogos)


let escolha 
while (true) {
    let nome_jogo = question("Digite um nome de um jogo: ");
    
    let escolha = question("Deseja continuar, sim ou nao: ").toLowerCase()
    if (escolha === "sim") {
       for (i = 0; i < jogos.length; i += 1) {
        if (nome_jogo === jogos[i]) {
            console.log(`Esse jogo já existe. a posicao dele e ${i + 1}`)
        } else {
            jogos.push(nome_jogo);
        }
        break;} 
    }
    else if (escolha === "nao") {
        break;
    }
}
