const readline = require("readline-sync");

// Dados iniciais fornecidos na atividade
let nomes = ["Minecraft", "Terraria", "Celeste"];
let generos = ["Sandbox", "Aventura", "Plataforma"];
let horas = [45, 20, 12];

let sistemaAtivo = true;

while (sistemaAtivo) {
    console.log("\n=== CATÁLOGO DE JOGOS ===");
    console.log("1. Cadastrar jogo.");
    console.log("2. Listar jogos.");
    console.log("3. Pesquisar jogo por nome.");
    console.log("4. Atualizar horas jogadas.");
    console.log("5. Apresentar o jogo com mais horas.");
    console.log("6. Calcular o total de horas jogadas.");
    console.log("7. Encerrar.");

    let escolha = readline.questionInt("Escolha uma opcao: ");

    switch (escolha) {
        case 1:
            // Cadastrar jogo nos três arrays mantendo a correspondência das posições
            let nomeNovo = readline.question("Digite o nome do jogo: ");
            let generoNovo = readline.question("Digite o genero do jogo: ");
            let horasNovas = readline.questionInt("Digite a quantidade de horas jogadas: ");

            if (nomeNovo.trim() !== "" && generoNovo.trim() !== "" && horasNovas >= 0) {
                nomes.push(nomeNovo);
                generos.push(generoNovo);
                horas.push(horasNovas);
                console.log("Jogo cadastrado com sucesso!");
            } else {
                console.log("Erro: Dados inválidos (campos não podem ser vazios e horas não podem ser negativas).");
            }
            break;

        case 2:
            // Listar jogos apresentando todas as informações de cada jogo
            console.log("\n--- Lista de Jogos ---");
            if (nomes.length === 0) {
                console.log("Nenhum jogo cadastrado.");
            } else {
                for (let i = 0; i < nomes.length; i++) {
                    console.log(`${i + 1}. Nome: ${nomes[i]} | Gênero: ${generos[i]} | Horas: ${horas[i]}h`);
                }
            }
            break;

        case 3:
            // Pesquisar jogo por nome informando a posição encontrada
            let pesquisa = readline.question("Digite o nome do jogo que deseja pesquisar: ");
            let encontrado = false;

            for (let i = 0; i < nomes.length; i++) {
                if (nomes[i].toLowerCase() === pesquisa.toLowerCase()) {
                    console.log(`\nJogo encontrado na posição ${i + 1}:`);
                    console.log(`Nome: ${nomes[i]} | Gênero: ${generos[i]} | Horas: ${horas[i]}h`);
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                console.log("O jogo pesquisado não foi encontrado no catálogo.");
            }
            break;

        case 4:
            // Atualizar horas jogadas validando o índice e impedindo horas negativas
            console.log("\n--- Atualizar Horas Jogadas ---");
            for (let i = 0; i < nomes.length; i++) {
                console.log(`${i + 1}. ${nomes[i]} (${horas[i]}h)`);
            }

            let indiceAtualizar = readline.questionInt("Digite o numero do jogo que deseja atualizar: ") - 1;

            if (indiceAtualizar >= 0 && indiceAtualizar < nomes.length) {
                let novasHoras = readline.questionInt("Digite a nova quantidade de horas jogadas: ");
                if (novasHoras >= 0) {
                    horas[indiceAtualizar] = novasHoras;
                    console.log("Horas atualizadas com sucesso!");
                } else {
                    console.log("Erro: A quantidade de horas não pode ser negativa.");
                }
            } else {
                console.log("Erro: Posição de jogo inválida.");
            }
            break;

        case 5:
            // Apresentar o jogo com mais horas calculado pelo programa
            if (nomes.length > 0) {
                let indiceMaior = 0;
                let maiorHoras = horas[0];

                for (let i = 1; i < horas.length; i++) {
                    if (horas[i] > maiorHoras) {
                        maiorHoras = horas[i];
                        indiceMaior = i;
                    }
                }

                console.log("\n--- Jogo com Mais Horas Jogadas ---");
                console.log(`Nome: ${nomes[indiceMaior]} | Gênero: ${generos[indiceMaior]} | Horas: ${horas[indiceMaior]}h`);
            } else {
                console.log("Nenhum jogo cadastrado.");
            }
            break;

        case 6:
            // Calcular o total de horas jogadas
            let totalHoras = 0;
            for (let i = 0; i < horas.length; i++) {
                totalHoras += horas[i];
            }
            console.log(`\nTotal de horas jogadas em todos os jogos: ${totalHoras}h`);
            break;

        case 7:
            // Encerrar o sistema
            console.log("Encerrando o catálogo de jogos...");
            sistemaAtivo = false;
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}