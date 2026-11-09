import { question, questionInt } from "readline-sync"

let produto = []
export function cadastrarPedido() {
    const numeroPedido = produto.length + 1;
    const nomeCliente = question("Nome cliente: ").trim();

    const produtos = [];

    let continuar = "sim"

    while (continuar.toLowerCase() !== "sim") {
            const nomeProduto = question("Nome do produto");
            const quantidade = questionInt("Quantidade do produto");
            const preco = questionInt("Preco do produto")

            const produto = {
                nome: nomeProduto,
                quantidade: quantidade,
                preco: preco
            }
            produtos.push(produto)
            continuar = question("Deseja cadastrar mais pedidos: (sim/nao)")
    }
    let totalPedidos = 0

    produtos.forEach(produto => {
        totalPedidos += produto.quantidade * produto.preco;
    })

    const novoPedido = {
        numero: numeroPedido,
        cliente: nomeCliente,
        produto: produtos,
        total: totalPedidos
    }
    console.log("Produto cadastrado com sucesso");
}