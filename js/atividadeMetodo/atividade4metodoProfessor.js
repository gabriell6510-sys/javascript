const { question } = require("readline-sync");
let jogos = [];
let dadosJSON = ""
function cadastrarJogo() {
    console.log("\n --- CADASTRAR JOGO ---");

    const nome = question("Nome do jogo: ");
    const categoria = question("Categoria: ");
    const ano = question("Ano de lancamento: ");

    const disponibilidade = question(
        "Disponivel? (s/n): "
    );

    // Criando um objeto com os dados informados
    const novojogo = {
        nome: nome,
        caegoria: categoria,
        ano: ano,
        disponivel: disponibilidade.toLowerCase() === "s"
    }

    jogos.push(novojogo)
}

function listarJogos() {
    console.log("\n--- LISTA DE JOGOS ---");

    if (listarJogos.length === 0) {
        console.log("Nenhum jogo cadastrado.");
        return;
    }

    listarJogos.forEach((jogo,indice) => {
        console.log("\nJogo:", indice + 1);
        console.log("Nome:", jogo.nome);
        console.log("Categoria:", jogo.categoria);
        console.log("Ano:", jogo.ano);
        console.log("Disponivel:", jogo.disponivel ? "Sim" : "Nao");
    })
    
}

function serializarDados() {
    console.log("\n--- SERIALIZACAO JSON ---");

    if (listarJogos.length === 0) {
        console.log("Nao existe jogos para serializar.");
        return;        
    }

    // Transformando o array de objetos em texto JSON
    dadosJSON = JSON.stringify(jogos);

    console.log("\nDados transformados em JSON:");
    try {
        // Transformando o texto JSON novamente em array
        const jogosRecuperados = JSON.stringify(dadosJSON);

        console.log("\nDados recuperados:");

        jogosRecuperados.forEach((jogo,indice) => {
            console.log("\nJogo:", indice + 1);
            console.log("Nome:", jogo.nome);
            console.log("Categoria:", jogo.categoria);
            console.log("Ano:", jogo.ano);
            console.log("Disponivel:", jogo.disponivel ? "Sim" : "Nao");
            
        })

        console.log("\n Tipo do texto JSON:", typeof dadosJSON);
        console.log("Tipo recuperado:", typeof jogosRecuperados);
        console.log("\n Desserializacao realizada com sucesso!");
    } catch(erro) {
        console.log("Erro: " + erro.message);
        
    }
        
}

function desserializarDados() {
    console.log("\n--- DESSERIALIZACAO JSON ---");

    if (dadosJSON === "") {
        console.log("Primeiro, serialize os dados.");
        return;
    }
    
    try {
        // Transformando o texto JSON novamente em array
        const jogosRecuperados = JSON.parse(dadosJSON);

        console.log("\nDados recuperados:");

        jogosRecuperados.forEach((jogo,indice) => {
            console.log("\nJogo:", indice + 1);
            console.log("Nome:", jogo.nome);
            console.log("Categoria:", jogo.categoria);
            console.log("Ano:", jogo.ano);
            console.log("Disponivel:", jogo.disponivel ? "Sim" : "Nao");
            
        })

        console.log("\n Tipo do texto JSON:", typeof dadosJSON);
        console.log("Tipo recuperado:", typeof jogosRecuperados);
        console.log("\n Desserializacao realizada com sucesso!");
    } catch(erro) {
        console.log("Erro: " + erro.message);
        
    }
}

while (true) {
    console.log("\n======= SISTEMA DE JOGOS =======");
    console.log("1 - Cadastrar jogo");
    console.log("2 - Listar jogos");
    console.log("3 - Serializar dados (JSON.stringify)");
    console.log("4 - Desserializar dados (JSON.parse)");
    console.log("5 - Sair");

    const opcao = Number(question("\nEscolha uma opcao: "));

    switch(opcao) {
        case 1:
            cadastrarJogo();
            break;

        case 2:
            listarJogos();
            break;

        case 3:
            serializarDados();
            break;

        case 4:
            desserializarDados();
            break;

        case 5:
            console.log("Encerrando sistema...");
            break;;
            
    }
    
}