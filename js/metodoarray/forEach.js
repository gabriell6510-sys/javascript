const produtos = [
    {nome: 'Mouse', categoria: 'Perifericos', preco: 50},
    {nome: 'Teclado', categoria: 'Perifericos', preco: 120},
    {nome: 'Monitor', categoria: 'Monitores', preco: 800},
    {nome: 'Headset', categoria: 'Audio', preco: 180},
    {nome: 'Webcam', categoria: 'Acessorios', preco: 150}
];

// produtos.forEach((produto) => {
//     console.log(produto.nome);
//     console.log(produto.categoria);
// });

// produtos.forEach(function(produto) {
//     console.log(produto.nome);
// });

produtos.forEach((produto, indice) => {
    console.log(`${indice + 1} - ${produto.nome} - R$ ${produto.preco.toFixed(2)}`)
});