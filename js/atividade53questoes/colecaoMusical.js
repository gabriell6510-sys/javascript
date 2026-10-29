const readline = require("readline-sync");

// Arrays para armazenar os dados da coleção musical[cite: 13]
let titulos = [];
let artistas = [];
let duracoes = []; // duração em segundos

// Função para cadastrar uma nova música[cite: 13]
function cadastrarMusica() {
    console.log("\n--- Cadastrar Música ---");
    let titulo = readline.question("Digite o titulo da musica: ");
    let artista = readline.question("Digite o nome do artista: ");
    let duracao = readline.questionInt("Digite a duracao em segundos: ");

    // Critério: impedir títulos vazios e durações negativas[cite: 13]
    if (titulo.trim() !== "" && artista.trim() !== "" && duracao >= 0) {
        titulos.push(titulo);
        artistas.push(artista);
        duracoes.push(duracao);
        console.log("Música cadastrada com sucesso!");
    } else {
        console.log("Erro: O título e o artista não podem estar vazios, e a duração não pode ser negativa.");
    }
}

// Função para listar toda a coleção[cite: 13]
function listarColecao() {
    console.log("\n--- Coleção de Músicas ---");
    if (titulos.length === 0) {
        console.log("A coleção está vazia.");
    } else {
        for (let i = 0; i < titulos.length; i++) {
            let minutos = Math.floor(duracoes[i] / 60);
            let segundosRestantes = duracoes[i] % 60;
            console.log(`${i + 1}. "${titulos[i]}" - ${artistas[i]} (${minutos}m ${segundosRestantes}s)`);
        }
    }
}

// Função para pesquisar títulos[cite: 13]
function pesquisarTitulo() {
    console.log("\n--- Pesquisar Música ---");
    let termo = readline.question("Digite o titulo (ou parte dele) que deseja pesquisar: ");
    let encontrado = false;

    for (let i = 0; i < titulos.length; i++) {
        if (titulos[i].toLowerCase().includes(termo.toLowerCase())) {
            let minutos = Math.floor(duracoes[i] / 60);
            let segundosRestantes = duracoes[i] % 60;
            console.log(`\nEncontrado na posição ${i + 1}:`);
            console.log(`Título: ${titulos[i]} | Artista: ${artistas[i]} | Duração: ${minutos}m ${segundosRestantes}s`);
            encontrado = true;
        }
    }

    if (!encontrado) {
        console.log("Nenhuma música encontrada com esse termo.");
    }
}

// Função para atualizar a duração de uma música[cite: 13]
function atualizarDuracao() {
    listarColecao();
    if (titulos.length === 0) return;

    let indice = readline.questionInt("Digite o numero da musica que deseja atualizar a duracao: ") - 1;

    if (indice >= 0 && indice < titulos.length) {
        let novaDuracao = readline.questionInt("Digite a nova duracao em segundos: ");
        if (novaDuracao >= 0) {
            duracoes[indice] = novaDuracao;
            console.log("Duração atualizada com sucesso!");
        } else {
            console.log("Erro: A duração não pode ser negativa.");
        }
    } else {
        console.log("Erro: Posição inválida.");
    }
}

// Função para remover músicas[cite: 13]
function removerMusica() {
    listarColecao();
    if (titulos.length === 0) return;

    let indice = readline.questionInt("Digite o numero da musica que deseja remover: ") - 1;

    if (indice >= 0 && indice < titulos.length) {
        let removido = titulos.splice(indice, 1);
        artistas.splice(indice, 1);
        duracoes.splice(indice, 1);
        console.log(`Música "${removido}" removida com sucesso!`);
    } else {
        console.log("Erro: Posição inválida.");
    }
}

// Função para apresentar a duração total da coleção em minutos e segundos[cite: 13]
function apresentarDuracaoTotal() {
    let totalSegundos = 0;
    for (let i = 0; i < duracoes.length; i++) {
        totalSegundos += duracoes[i];
    }

    let minutosTotais = Math.floor(totalSegundos / 60);
    let segundosRestantes = totalSegundos % 60;

    console.log(`\nDuração total da coleção: ${minutosTotais} minuto(s) e ${segundosRestantes} segundo(s) (Total de ${totalSegundos} segundos).`);
}

// Menu principal com repetição[cite: 13]
function iniciarSistema() {
    let sistemaAtivo = true;

    while (sistemaAtivo) {
        console.log("\n=== SISTEMA DE COLEÇÃO MUSICAL ===");
        console.log("1. Cadastrar música");
        console.log("2. Listar coleção");
        console.log("3. Pesquisar títulos");
        console.log("4. Atualizar duração");
        console.log("5. Remover música");
        console.log("6. Apresentar duração total da coleção");
        console.log("7. Encerrar sistema");

        let escolha = readline.questionInt("Escolha uma opcao: ");

        // Validação e controle via switch/condicionais[cite: 13]
        switch (escolha) {
            case 1:
                cadastrarMusica();
                break;
            case 2:
                listarColecao();
                break;
            case 3:
                pesquisarTitulo();
                break;
            case 4:
                atualizarDuracao();
                break;
            case 5:
                removerMusica();
                break;
            case 6:
                apresentarDuracaoTotal();
                break;
            case 7:
                console.log("Encerrando o sistema...");
                sistemaAtivo = false;
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

// Execução do programa
iniciarSistema();