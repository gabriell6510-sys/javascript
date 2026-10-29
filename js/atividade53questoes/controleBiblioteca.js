const readline = require("readline-sync");

// Dados iniciais fornecidos na atividade
let livros = [
    "O Hobbit",
    "Dom Casmurro",
    "A Revolução dos Bichos",
    "O Pequeno Príncipe"
];

let emprestados = [false, true, false, false];

let sistemaAtivo = true;

// O sistema deve funcionar continuamente até o usuário escolher encerrar
while (sistemaAtivo) {
    console.log("\n=== SISTEMA DE CONTROLE DE BIBLIOTECA ===");
    console.log("1. Listar todos os livros.");
    console.log("2. Pesquisar um livro pelo título.");
    console.log("3. Realizar um empréstimo.");
    console.log("4. Registrar uma devolução.");
    console.log("5. Consultar quantos livros estão disponíveis.");
    console.log("6. Encerrar o sistema.");

    let escolha = readline.questionInt("Escolha uma opcao: ");

    switch (escolha) {
        case 1:
            // Listar todos os livros mostrando o título e a situação de cada um
            console.log("\n--- Catálogo de Livros ---");
            for (let i = 0; i < livros.length; i++) {
                let situacao = emprestados[i] ? "Emprestado" : "Disponível";
                console.log(`${i + 1}. ${livros[i]} - ${situacao}`);
            }
            break;

        case 2:
            // Pesquisar um livro pelo título informando se não estiver cadastrado
            let termoPesquisa = readline.question("Digite o titulo do livro que deseja pesquisar: ");
            let encontrado = false;

            for (let i = 0; i < livros.length; i++) {
                if (livros[i].toLowerCase() === termoPesquisa.toLowerCase()) {
                    let situacao = emprestados[i] ? "Emprestado" : "Disponível";
                    console.log(`O livro "${livros[i]}" está cadastrado. Situação: ${situacao}.`);
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                console.log("O título não está cadastrado.");
            }
            break;

        case 3:
            // Realizar um empréstimo (um livro emprestado não pode ser emprestado novamente)
            console.log("\n--- Realizar Empréstimo ---");
            for (let i = 0; i < livros.length; i++) {
                let situacao = emprestados[i] ? "Emprestado" : "Disponível";
                console.log(`${i + 1}. ${livros[i]} - ${situacao}`);
            }

            let indiceEmprestimo = readline.questionInt("Digite o numero do livro que deseja emprestar: ") - 1;

            if (indiceEmprestimo >= 0 && indiceEmprestimo < livros.length) {
                if (!emprestados[indiceEmprestimo]) {
                    emprestados[indiceEmprestimo] = true;
                    console.log(`Empréstimo do livro "${livros[indiceEmprestimo]}" realizado com sucesso!`);
                } else {
                    console.log("Erro: Um livro emprestado não pode ser emprestado novamente.");
                }
            } else {
                console.log("Erro: Número de livro inválido.");
            }
            break;

        case 4:
            // Registrar uma devolução (um livro disponível não pode ser devolvido sem ter sido emprestado)
            console.log("\n--- Registrar Devolução ---");
            for (let i = 0; i < livros.length; i++) {
                let situacao = emprestados[i] ? "Emprestado" : "Disponível";
                console.log(`${i + 1}. ${livros[i]} - ${situacao}`);
            }

            let indiceDevolucao = readline.questionInt("Digite o numero do livro que deseja devolver: ") - 1;

            if (indiceDevolucao >= 0 && indiceDevolucao < livros.length) {
                if (emprestados[indiceDevolucao]) {
                    emprestados[indiceDevolucao] = false;
                    console.log(`Devolução do livro "${livros[indiceDevolucao]}" registrada com sucesso!`);
                } else {
                    console.log("Erro: Um livro disponível não pode ser devolvido sem que tenha sido emprestado.");
                }
            } else {
                console.log("Erro: Número de livro inválido.");
            }
            break;

        case 5:
            // Consultar quantos livros estão disponíveis
            let contadorDisponiveis = 0;
            for (let i = 0; i < emprestados.length; i++) {
                if (!emprestados[i]) {
                    contadorDisponiveis++;
                }
            }
            console.log(`Quantidade de livros disponíveis no momento: ${contadorDisponiveis}`);
            break;

        case 6:
            // Encerrar o sistema
            console.log("Encerrando o sistema...");
            sistemaAtivo = false;
            break;

        default:
            // Mensagem de erro para opções inválidas
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}