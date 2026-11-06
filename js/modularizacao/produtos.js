import {perguntarNumero, perguntarTexto} from "./entrada.js"

export const produtos = [];

// função para cadastrar produtos
export function cadastrarProduto() {
    try {
        console.log("\n---- CADASTRO DE PRODUTO ----");
        const nome = perguntarTexto("Nome: ");
        const preco = perguntarNumero("Preco: ");
        const quantidade = perguntarNumero("Quantidade: ");
        const produto = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        };
        if (nome === "") {
            throw new Error("Nome nao pode ser vazio")
        }
        produtos.push(produto);

        console.log("\nProduto cadastrado!"); 
        } catch(erro) {
            console.log("Erro: " + erro.message);
        }
    
}

export function listarProdutos() {
    console.log("\n---- PRODUTOS CADASTRADOS ----");

    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }
    produtos.forEach(produto => {
        console.log("\n Nome:", produto.nome);
        console.log("Preco:", produto.preco);
        console.log("Quantidade:", produto.quantidade);
    });
    
}

export function buscarProduto() {
    const nome = perguntarTexto(
        "\nDigite o nome do produto: "
    );
    const produtoEncontrado = produtos.find(produto => {
        return produto.nome === nome
    })
    

    if (produtoEncontrado) {
        console.log("\nProduto encontrado!");
        console.log(produtoEncontrado);
    } else {
        console.log("\nProduto nao encontrado");
    }
}

// module.exports = {
//     cadastrarProduto,
//     listarProdutos,
//     buscarProduto,
//     produtos
// }

