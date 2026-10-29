// Exemplo 1 - Aplicar desconto nos precos

const produtos = [
    {nome: "Mouse", preco: 100},
    {nome: "Teclado", preco: 200},
    {nome: "Monitor", preco: 1000}
];

const produtoDesconto = produtos.map(produto => {
    return {
        nome: produto.nome,
        precoOriginal: produto.preco,
        precoFinal: produto.preco * 0.9
    }
});
console.log(produtoDesconto);
