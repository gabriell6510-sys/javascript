// Desenvolva um programa em JavaScript para gerenciar os livros de uma biblioteca. 
// O sistema deverá permitir que o usuário cadastre livros, consulte os registros e controle os empréstimos e as devoluções.
// O programa deverá apresentar um menu interativo com as seguintes funcionalidades:

// Cadastrar livro: registrar código, título, autor, categoria e ano de publicação.
// Listar livros: exibir todos os livros cadastrados e suas respectivas situações.
// Pesquisar livro: localizar livros pelo título ou parte dele.
// Emprestar livro: alterar a situação de um livro disponível para emprestado.
// Devolver livro: alterar a situação de um livro emprestado para disponível.
// Listar livros disponíveis: exibir os livros que podem ser emprestados.
// Exibir relatório: apresentar a quantidade total de livros, disponíveis e emprestados.
// Sair: encerrar o programa.

// Requisitos técnicos:

// Utilizar arrays para armazenar os dados dos livros.
// Criar funções para organizar as funcionalidades do sistema.
// Utilizar estruturas condicionais e de repetição.
// Implementar o menu com switch/case.
// Validar as informações inseridas pelo usuário.
// Garantir que não seja possível emprestar um livro já emprestado ou devolver 
// um livro que já esteja disponível.
// O sistema deverá funcionar por meio de um menu que se repete até que o usuário escolha a opção de sair.

const entrada = require("readline-sync");

// Arrays para armazenar os dados dos livros
let codigos = [];
let titulos = [];
let autores = [];
let categorias = [];
let anos = [];
let situacoes = [];

// Cadastrar um livro
function cadastrarLivro() {
    console.log("\n===== CADASTRAR LIVRO =====");

    let codigo = entrada.question("Digite o codigo do livro: ");

    if (codigo === "") {
        console.log("Erro: o codigo nao pode ficar vazio.");
        return;
    }

    // Verificar se o codigo ja existe
    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] === codigo) {
            console.log("Erro: ja existe um livro com esse codigo.");
            return;
        }
    }

    let titulo = entrada.question("Digite o titulo: ");

    if (titulo === "") {
        console.log("Erro: o titulo nao pode ficar vazio.");
        return;
    }

    let autor = entrada.question("Digite o autor: ");

    if (autor === "") {
        console.log("Erro: o autor nao pode ficar vazio.");
        return;
    }

    let categoria = entrada.question("Digite a categoria: ");

    if (categoria === "") {
        console.log("Erro: a categoria nao pode ficar vazia.");
        return;
    }

    let ano = entrada.questionInt("Digite o ano de publicacao: ");

    if (ano < 1 || ano > new Date().getFullYear()) {
        console.log("Erro: ano de publicacao invalido.");
        return;
    }

    // Armazenar as informacoes nos arrays
    codigos.push(codigo);
    titulos.push(titulo);
    autores.push(autor);
    categorias.push(categoria);
    anos.push(ano);
    situacoes.push("Disponivel");

    console.log("Livro cadastrado com sucesso!");
}

// Listar todos os livros
function listarLivros() {
    console.log("\n===== LIVROS CADASTRADOS =====");

    if (codigos.length === 0) {
        console.log("Nenhum livro cadastrado.");
        return;
    }

    for (let i = 0; i < codigos.length; i++) {
        console.log("\nCodigo: " + codigos[i]);
        console.log("Titulo: " + titulos[i]);
        console.log("Autor: " + autores[i]);
        console.log("Categoria: " + categorias[i]);
        console.log("Ano: " + anos[i]);
        console.log("Situacao: " + situacoes[i]);
    }
}

// Pesquisar livros pelo titulo ou parte dele
function pesquisarLivro() {
    console.log("\n===== PESQUISAR LIVRO =====");

    let pesquisa = entrada.question(
        "Digite o titulo ou parte dele: "
    ).toLowerCase();

    if (pesquisa === "") {
        console.log("Digite um titulo para pesquisar.");
        return;
    }

    let encontrou = false;

    for (let i = 0; i < titulos.length; i++) {
        if (titulos[i].toLowerCase().includes(pesquisa)) {
            console.log("\nCodigo: " + codigos[i]);
            console.log("Titulo: " + titulos[i]);
            console.log("Autor: " + autores[i]);
            console.log("Categoria: " + categorias[i]);
            console.log("Ano: " + anos[i]);
            console.log("Situacao: " + situacoes[i]);

            encontrou = true;
        }
    }

    if (encontrou === false) {
        console.log("Nenhum livro encontrado.");
    }
}

// Emprestar um livro
function emprestarLivro() {
    console.log("\n===== EMPRESTAR LIVRO =====");

    let codigo = entrada.question(
        "Digite o codigo do livro: "
    );

    let posicao = -1;

    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] === codigo) {
            posicao = i;
            break;
        }
    }

    if (posicao === -1) {
        console.log("Livro nao encontrado.");
        return;
    }

    if (situacoes[posicao] === "Emprestado") {
        console.log("Este livro ja esta emprestado.");
        return;
    }

    situacoes[posicao] = "Emprestado";

    console.log(
        "Livro \"" + titulos[posicao] +
        "\" emprestado com sucesso!"
    );
}

// Devolver um livro
function devolverLivro() {
    console.log("\n===== DEVOLVER LIVRO =====");

    let codigo = entrada.question(
        "Digite o codigo do livro: "
    );

    let posicao = -1;

    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] === codigo) {
            posicao = i;
            break;
        }
    }

    if (posicao === -1) {
        console.log("Livro nao encontrado.");
        return;
    }

    if (situacoes[posicao] === "Disponivel") {
        console.log("Este livro ja esta disponivel.");
        return;
    }

    situacoes[posicao] = "Disponivel";

    console.log(
        "Livro \"" + titulos[posicao] +  "\" devolvido com sucesso!"
    );
}

// Listar apenas os livros disponiveis
function listarDisponiveis() {
    console.log("\n===== LIVROS DISPONIVEIS =====");

    let encontrou = false;

    for (let i = 0; i < codigos.length; i++) {
        if (situacoes[i] === "Disponivel") {
            console.log(
                codigos[i] + " - " +
                titulos[i] + " (" +
                autores[i] + ")"
            );

            encontrou = true;
        }
    }

    if (encontrou === false) {
        console.log("Nenhum livro disponivel.");
    }
}

// Exibir relatorio da biblioteca
function exibirRelatorio() {
    console.log("\n===== RELATORIO DA BIBLIOTECA =====");

    let total = codigos.length;
    let disponiveis = 0;
    let emprestados = 0;

    for (let i = 0; i < situacoes.length; i++) {
        if (situacoes[i] === "Disponivel") {
            disponiveis++;
        } else if (situacoes[i] === "Emprestado") {
            emprestados++;
        }
    }

    console.log("Total de livros: " + total);
    console.log("Livros disponiveis: " + disponiveis);
    console.log("Livros emprestados: " + emprestados);
}

// Exibir o menu principal
function exibirMenu() {
    console.log("\n========== BIBLIOTECA ==========");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Pesquisar livro");
    console.log("4 - Emprestar livro");
    console.log("5 - Devolver livro");
    console.log("6 - Listar livros disponiveis");
    console.log("7 - Exibir relatorio");
    console.log("0 - Sair");
    console.log("================================");
}

// Programa principal
let opcao;

do {
    exibirMenu();

    opcao = entrada.question("Escolha uma opcao: ").trim();// trim() corta espaço vazio

    switch (opcao) {
        case "1":
            cadastrarLivro();
            break;

        case "2":
            listarLivros();
            break;

        case "3":
            pesquisarLivro();
            break;

        case "4":
            emprestarLivro();
            break;

        case "5":
            devolverLivro();
            break;

        case "6":
            listarDisponiveis();
            break;

        case "7":
            exibirRelatorio();
            break;

        case "0":
            console.log("Sistema encerrado. Ate logo!");
            break;

        default:
            console.log("Opcao invalida. Tente novamente.");
    }

} while (opcao !== "0");