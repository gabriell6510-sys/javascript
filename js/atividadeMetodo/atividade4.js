const { question } = require("readline-sync");

const jogo = [];
const jogoJON = ""

function cadastrarJogo() {
    try {
        console.log("\n==== CADASTRO DO JOGO ====");

        let nome = question("Nome do jogo: ");   
        let categoria = question("Categoria do jogo: ");   
        let ano = question("Ano de lancamento: ");   
        let disponivel = Boolean(question("Disponivel: (true/false): ")) === true;
        if (disponivel === true) {
            disponivel = true
        } else if (disponivel === false) {
                disponivel === false
            } else {
                console.log("Valor invalido! Digite true ou false");
                
            }
            if (nome !== "" && categoria !== "" && ano !== "" && disponivel !== "") {
                jogo.push({
                nome: nome,
                categoriaJogo: categoria,
                ano: ano,
                disponivel: disponivel
            })
            console.log("Jogo cadastrado com sucesso");
            }

            if (nome === "") {
                throw new Error("Nome do jogo nao pode ser vazio")
            }
            if (categoria === "") {
                throw new Error("Nome da categoria do jogo nao pode ser vazio")
            }
            if (ano === "") {
                throw new Error("Ano de lancamento do jogo nao pode ser vazio")
            }
        
    } catch(erro) {
        console.log("Erro" + erro.message);
    }
}

function listarJogos() {
    try {
        jogo.forEach(jogo => {
            console.log(`A categoria do jogo ${jogo.nome} é ${jogo.categoriaJogo} e  foi lançado em ${jogo.ano} e encontra-se ${jogo.disponivel}`);
        });

        if (jogo === "") {
            throw new Error("Nao existe jogo cadastrado no momento");
        }
    } catch(erro) {
        console.log("Error: ", erro.message);
    }
}
    
function serializarObjeto() {
    try {
        const jogoJSON = JSON.stringify(jogo)
        if (jogoJSON === "") {
            throw new Error("Nao existe jogo cadastrado no JSON")
        } else {
            dadosJSON = JSON.stringify(jogo);
            console.log(dadosJSON);
            
        }
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}

function desserializarDados() {
    try {
        const dadosJSON = JSON.parse(jogo);
        if (dadosJSON === "") {
            throw new Error("Nao existe jogo cadastrado no momento");
        } else {
            console.log(dadosJSON);
        }
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}
    
while (true) {
    console.log("1 - Cadastrar jogo");
    console.log("2 - Listar jogos");
    console.log("3 - Serializar dados (JSON.stringify)");
    console.log("4 - Desserializar dados (JSON.parse)");
    console.log("5 - Sair");
    let opcao = Number(question("Digite uma das opcoes acima: "));
    if (opcao === 5) {
        console.log("Encerrando o sistema...");
        break;
    }

    switch(opcao) {
        case 1:
            cadastrarJogo();
            break;

        case 2:
            listarJogos();
            break;

        case 3:
            serializarObjeto();
            break;

        case 4:
            desserializarDados();
            break;

        default:
            console.log("Informacao inválida! Digite novamente");
            break;
            
    }
}

