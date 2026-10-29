// reduce() percorre o array e ele acumula e soma tudo

// Exemplo 1 - Calcular o valor do estoque
const produtos = [
    { nome: "Mouse", preco: 50, quantidade: 10 }, 
    { nome: "Teclado", preco: 120, quantidade: 5 }, 
    { nome: "Monitor", preco: 800, quantidade: 3 } 
];

// comeca com total igual a zero
// Em cada volta, soma preco x quantidade ao acumulador
const valorEstoque = produtos.reduce(total, produto => {
    return total + produto.preco * produto.quantidade
}, 0);

console.log("Valor total do estoque: R$", valorEstoque);