const { question } = require("readline-sync");
// ARRAY PRINCIPAL DE PEDIDOS
let pedidos = [];
// VARIAVEL QUE ARMAZENARA OS PEDIDOS RECUPERADOS
let pedidosJSON = "";

// ARRAY QUE RECEBERA OS PEDIDOS RECUPERADOS
let pedidosRecuperados = [];

// CADASTRAR UM NOVO PEDIDO
function cadastrarPedidos() {
    console.log("\n===== NOVO PEDIDO =====");
    
    const numero = pedidos.length + 1;
    const cliente = question("Nome do cliente: ");
    // ARRAY PARA ARMAZENAR OS PRODUTOS DO PEDIDO
    const produtos = [];

    let continuar = "s";

    while (continuar.toLowerCase() === "s") {

        console.log("\n --- Produto ---");
        
        const nome = question("Nome do produto: ");
        const quantidade = question("Quantidade: ");
        const preco = question("Preco unitario: ");

        const produto = {
            nome: nome,
            quantidade: quantidade,
            preco: preco
        };
        produtos.push(produto);
        continuar = question("\nDeseja adicionar outro produto? (s/n):");
    }

    let total = 0;

    produtos.forEach(produto => {
        total += produto.quantidade * produto.preco;
    });

    // criando o objeto principal do pedido
    const novoPedido = {
        numero: numero,
        cliente: cliente,
        produtos: produtos,
        total: total,
        status: "Em preparo"
    };

    pedidos.push(novoPedido);

    console.log("\nPedido cadastrado com sucesso!");
    console.log("Numero do pedido", numero);
    console.log("Total: R$", total.toFixed(2));
    
}

function listarPedidos() {
    try {
        pedidos.forEach(produto => {
            console.log(`\nPedido:`, produto.numero);
            console.log(`Cliente:`, produto.cliente);
            console.log(`Produto:`);

            produto.produtos.forEach(produto => {
                console.log(produto.nome,
                    "| Quantidade:", produto.quantidade,
                    "| Preco: R$", produto.preco
                );
            })
        })
        
        if (pedidos.length === 0) {
            throw new Error("Nao existe nenhum produto cadastrado no momento")
        }
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
    
}

function exibirPedidos() {
    try{
        
        if (pedidos.length === 0) {
            throw new Error("Nao existe produto cadastrado");
        } 
        pedidosJSON= JSON.stringify(pedidos);
        console.log("\n--- Pedidos em formato JSON ---");
        console.log(pedidosJSON);
        
        
    } catch(erro) {
        console.log("Erro:" + erro.message);
    }
}

function recuperarDados() {
    try {
        if (pedidosJSON === "") {
            throw new Error("Nao existe produto cadastrado");
        } 
        const recuperarDado = JSON.parse(pedidosJSON);

        console.log("Dados recuperados com sucesso para a lista de pedidos");
        pedidosRecuperados = JSON.parse(pedidosJSON);
    } catch(erro) {
        console.log("Erro:" + erro.message);
    }
}

function listarProdutoRecuperado() {
    try {
        pedidosRecuperados.forEach(produto => {
            console.log(`\nNumero do Pedido:`, produto.numero);
            console.log(`Nome do cliente:`, produto.cliente);
            
            produto.produtos.forEach(produto => {
                console.log("\n--- Produto ---");
                console.log(`\nProduto: `, produto.nome);
                console.log(`Quantidade: `, produto.quantidade);
                console.log(`Preco: `, produto.preco);
            })
            console.log(`\nTotal: ${produto.total}`);
            console.log(`\nStatus: ${produto.status}`);
            console.log(`-------------------`);
        })
        if (pedidosJSON === "") {
            throw new Error("Nao existe produto cadastrado")
        }
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}

while(true) {
    console.log("1 - Cadastrar pedido");
    console.log("2 - Listar pedidos");
    console.log("3 - Exibir pedidos em JSON");
    console.log("4 - Recuperar pedidos do JSON");
    console.log("5 - Listar pedidos recuperados");
    console.log("6 - Sair do sistema");
    let opcao = Number(question("Digite uma das opcoes acima: "));
    if (opcao === 6) {
        console.log(("Encerrando o sistema"));
        break;
    }
    switch(opcao) {
        case 1:
            cadastrarPedidos();
            break;

        case 2:
            listarPedidos();
            break;

        case 3:
            exibirPedidos();
            break;

        case 4:
            recuperarDados();
            break;

        case 5:
            listarProdutoRecuperado();
            break;

        default:
            console.log("Informacao invalida");
            break;
            
    }
}


