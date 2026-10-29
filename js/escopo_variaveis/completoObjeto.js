const { question } = require("readline-sync");

let jogos = [
    {
        nome: "Minecraft",
        genero: "Aventura",
        horas: 45
    },
    {
        nome: "FIFA",
        genero: "Esporte",
        horas: 30
    },
    {
        nome: "The Sims",
        genero: "Simulacao",
        horas: 20
    }
];

function listarJogos() {
    console.log("\n===== MEUS JOGOS =====");
    for (let i = 0; i < jogos.length; i += 1) {
        console.log(`${i + 1} - ${jogos[i].nome}`);
        console.log(`Genero: ${i + 1} - ${jogos[i].genero}`);
        console.log(`Horas jogadas: ${i + 1} - ${jogos[i].horas}`);
        console.log("---------");
    }
}

function consultarHoras() {
    let total = 0;

    for (let i = 0; i < jogos.length; i += 1) {
        total += jogos[i].horas;
    }

    return total;
}

let opcao;

while (opcao !== 3) {
    console.log("\n===== CATALOGO DE JOGOS =====");
    console.log("1 - Listar jogos");
    console.log("2 - Consultar total de horas");
    console.log("3 - Sair");

    opcao = question("Escolha uma opcao: ");

    if(opcao === "1") {
        listarJogos();
    }

    else if (opcao === "2") {
        console.log(`O total de horas jogadas e de ${consultarHoras()}`)
    } 
    
    else if (opcao === "3") {
        console.log("Encerrando o sistema...");
    }
    else {
        console.log("Opcao invalida...")
    }
}