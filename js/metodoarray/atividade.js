const { question } = require("readline-sync");

const produtos = [
    { nome: "Mouse", categoria: "Perifericos", preco: 50, estoque: 4 },
    { nome: "Teclado", categoria: "Perifericos", preco: 120, estoque: 10 },
    { nome: "Monitor", categoria: "Monitores", preco: 800, estoque: 2 },
    { nome: "Webcam", categoria: "Acessorios", preco: 150, estoque: 6 },
    { nome: "Headset", categoria: "Audio", preco: 180, estoque: 0 }
];

while(true) {
    console.log("\n1 - FIND: localiza um produto especifico pelo nome");
    console.log("2 - FILTER: Seleciona produtos com estoque baixo");
    console.log("3 - SOME: Verfica se existe algum produto sem estoque");
    console.log("4 - EVERY: Verifica se todos os produtos possuem estoque");
    console.log("5 - MAP: Cria uma lista com o nome e o valor total por produto");
    console.log("6 - REDUCE: Calcula o valor total de todo o estoque");
    console.log("7 - SAIR DO SISTEMA");
    let opcao = Number(question("Escolha qual metodo voce quer utilizar de 1 a 7: "));

    if (opcao === 7) {
        console.log("Encerrando sistema!");
        break;
    }

    switch(opcao) {

        // FIND
        case 1:
            const verificaNome = produtos.find(produto => {
                // let nome = question("Digite o nome que voce deseja visualizar: ")
                // if (produto.nome === nome) {
                //     console.log(`O nome ${nome} esta no array`)
                // } else {
                //     console.log("Nome invalido"); 
                // }
                return produto.nome === "Mouse";
            });
            console.log("\nProduto selecionado")
            console.log(`Nome: ${verificaNome.nome}`);
            break;
        
        // FILTER
        case 2:
            const selecionarProduto = produtos.filter(produto => {
                return produto.estoque < 5
            });
            console.log("\nPRODUTOS COM ESTOQUE ABAIXO DE 5")
            selecionarProduto.forEach(produto => {
                console.log(`nome: ${produto.nome}, categoria: ${produto.categoria}, ${produto.preco}`)
            })
            break;

        // SOME
        case 3:
            const produtoEstoqueBaixo = produtos.some(produto => {
            return produto.estoque === 0 
        });
        
        if (produtoEstoqueBaixo) {
            console.log("Existe um produto sem estoque");
        } else {
            console.log("Nenhum produto esta sem estoque");
            
        }
        break;

        // EVERY
        case 4: 
            const verificaProduto = produtos.every(produto => {
            return produto.estoque > 0
        });

        console.log(`Todos produtos estao com estoque: ${verificaProduto}`);
        break;

        // MAP
        case 5:
            const criaLista = produtos.map(produto => {
            return {
                nome: produto.nome,
                valorTotal: produto.preco 
            }
        });
        console.log("LISTA DOS PRODUTOS");
        
        criaLista.forEach(produto => {
            console.log(`nome: ${produto.nome} , valor total : ${produto.valorTotal}`)
        }) 
        
        break;

        // REDUCE
        case 6:
            const somaPrecos = produtos.reduce((total, produto) => {
            return total + produto.preco;
        }, 0);
        console.log(`A soma de todos os produtos: ${somaPrecos}`);
        break;

        default:
            console.log("Opcao invalida!");
            break;
        
    }
}

//  localiza um produto especifico pelo nome