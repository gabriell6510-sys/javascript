const { question } = require("readline-sync");

const produtos = [
    { nome: "Mouse", categoria: "Perifericos", preco: 50, estoque: 4 },
    { nome: "Teclado", categoria: "Perifericos", preco: 120, estoque: 10 },
    { nome: "Monitor", categoria: "Monitores", preco: 800, estoque: 2 },
    { nome: "Webcam", categoria: "Acessorios", preco: 150, estoque: 6 },
    { nome: "Headset", categoria: "Audio", preco: 180, estoque: 0 }
];
const verficaNome = produtos.find(nome => {
    return nome.nome;
});

const selecionaProduto = produtos.filter(produto => {
    return produto.estoque < 5
});
const selecionaProduto = produtos.some(produto => {
    return produto.estoque < 5
});
while(true) {
    console.log("1 - FIND: localiza um produto especifico pelo nome");
    console.log("2 - FILTER: Seleciona produtos com estoque baixo");
    console.log("3 - SOME: Verfica se existe algum produto sem estoque");
    console.log("4 - EVERY: Verifica se todos os produtos possuem estoque");
    console.log("5 - MAP: Cria uma lista com o nome e o valor total por produto");
    console.log("6 - REDUCE: Calcula o valor total de todo o estoque");
    console.log("7 - SAIR DO SISTEMA");
    let escolha = Number(question("Escolha qual metodo voce quer utilizar de 1 a 6: "));

    if (escolha === 7) {
        console.log("Encerrando sistema!");
        break;
    }
}

//  localiza um produto especifico pelo nome
