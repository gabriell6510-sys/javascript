const produtos = [
    {nome: 'Mouse', categoria: 'Perifericos', preco: 50},
    {nome: 'Teclado', categoria: 'Perifericos', preco: 120},
    {nome: 'Monitor', categoria: 'Monitores', preco: 800},
    {nome: 'Headset', categoria: 'Audio', preco: 180},
    {nome: 'Webcam', categoria: 'Acessorios', preco: 150}
];

let produtoEncontrado = produtos.find((produto) => {
    return produto.preco > 500;
});

if (produtoEncontrado) {
    console.log("===== Produto Encontrado =====");
    console.log(`Nome: ${produtoEncontrado.nome}`);
    console.log(`Categoria: ${produtoEncontrado.categoria}`);
    console.log(`Preco: ${produtoEncontrado.preco.toFixed(2)}`);
    console.log("===============");
} else {
    console.log("Nenhum produto com preco acima de R$ 500,00 foi encontrado.");
}

