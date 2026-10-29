const readline = require('readline-sync');

// Arrays para armazenar os dados da coleção musical
let titulos = [];
let artistas = [];
let duracoes = []; // em segundos

function cadastrarMusica() {
    console.log("\n--- Cadastrar Nova Música ---");
    let titulo = readline.question("Digite o titulo da musica: ").trim();
    if (titulo === "") {
        console.log("Erro: O titulo nao pode ser vazio!");
        return;
    }

    let artista = readline.question("Digite o nome do artista: ").trim();
    if (artista === "") {
        console.log("Erro: O artista nao pode ser vazio!");
        return;
    }

    let duracao = parseInt(readline.question("Digite a duracao em segundos: "));
    if (isNaN(duracao) || duracao < 0) {
        console.log("Erro: A duracao deve ser um numero maior ou igual a zero!");
        return;
    }

    titulos.push(titulo);
    artistas.push(artista);
    duracoes.push(duracao);
    console.log("Musica cadastrada com sucesso!");
}

function listarColecao() {
    console.log("\n--- Lista de Musicas ---");
    if (titulos.length === 0) {
        console.log("A colecao esta vazia.");
        return;
    }

    for (let i = 0; i < titulos.length; i++) {
        let minutos = Math.floor(duracoes[i] / 60);
        let segundos = duracoes[i] % 60;
        console.log(`[${i}] ${titulos.name || titulos[i]} - ${artistas[i]} (${minutos}m ${segundos}s)`);
    }
}

function pesquisarTitulo() {
    console.log("\n--- Pesquisar Titulo ---");
    if (titulos.length === 0) {
        console.log("A colecao esta vazia.");
        return;
    }

    let termo = readline.question("Digite parte do titulo para pesquisar: ").toLowerCase();
    let encontrados = false;

    for (let i = 0; i < titulos.length; i++) {
        if (titulos[i].toLowerCase().includes(termo)) {
            let minutos = Math.floor(duracoes[i] / 60);
            let segundos = duracoes[i] % 60;
            console.log(`- [Indice ${i}] ${titulos[i]} | Artista: ${artistas[i]} | Duracao: ${minutos}m ${segundos}s`);
            encontrados = true;
        }
    }

    if (!encontrados) {
        console.log("Nenhuma musica encontrada com esse termo.");
    }
}

function atualizarDuracao() {
    console.log("\n--- Atualizar Duracao ---");
    listarColecao();
    if (titulos.length === 0) return;

    let indice = parseInt(readline.question("Digite o indice da musica que deseja atualizar: "));
    if (isNaN(indice) || indice < 0 || indice >= titulos.length) {
        console.log("Indice invalido!");
        return;
    }

    let novaDuracao = parseInt(readline.question("Digite a nova duracao em segundos: "));
    if (isNaN(novaDuracao) || novaDuracao < 0) {
        console.log("Erro: A duracao nao pode ser negativa!");
        return;
    }

    duracoes[indice] = novaDuracao;
    console.log("Duracao atualizada com sucesso!");
}

function removerMusica() {
    console.log("\n--- Remover Musica ---");
    listarColecao();
    if (titulos.length === 0) return;

    let indice = parseInt(readline.question("Digite o indice da musica que deseja remover: "));
    if (isNaN(indice) || indice < 0 || indice >= titulos.length) {
        console.log("Indice invalido!");
        return;
    }

    console.log(`Removendo: ${titulos[indice]} - ${artistas[indice]}`);
    titulos.splice(indice, 1);
    artistas.splice(indice, 1);
    duracoes.splice(indice, 1);
    console.log("Musica removida com sucesso!");
}

function apresentarDuracaoTotal() {
    console.log("\n--- Duracao Total da Colecao ---");
    if (titulos.length === 0) {
        console.log("A colecao esta vazia (0 segundos).");
        return;
    }

    let totalSegundos = 0;
    for (let i = 0; i < duracoes.length; i++) {
        totalSegundos += duracoes[i];
    }

    let minutos = Math.floor(totalSegundos / 60);
    let segundos = totalSegundos % 60;

    console.log(`Total de musicas: ${titulos.length}`);
    console.log(`Duracao total: ${minutos} minuto(s) e ${segundos} segundo(s) (${totalSegundos} segundos no total).`);
}

function iniciarSistema() {
    let opcao;
    do {
        console.log("\n===============================");
        console.log("    SISTEMA DE COLECAO MUSICAL");
        console.log("===============================");
        console.log("1. Cadastrar musica");
        console.log("2. Listar colecao");
        console.log("3. Pesquisar titulo");
        console.log("4. Atualizar duracao");
        console.log("5. Remover musica");
        console.log("6. Apresentar duracao total");
        console.log("0. Sair");
        
        opcao = parseInt(readline.question("Escolha uma opcao: "));

        switch (opcao) {
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
            case 0:
                console.log("Encerrando o sistema. Ate logo!");
                break;
            default:
                console.log("Opcao invalida! Tente novamente.");
        }
    } while (opcao !== 0);
}

iniciarSistema();