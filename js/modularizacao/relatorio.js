// Função para calcular o valor total do estoque
export function calcularEstoque(produtos) {
    let total = 0;
    produtos.forEach(produto => {
        total += produto.preco * produto.quantidade;
    });
    return total;
}

export function quantidadeEstoque(produtos) {
    let quantidade = 0;
    produtos.forEach(produtos => {
        quantidade += produtos.quantidade;
    })

    return quantidade;
};

// module.exports = {
//     calcularEstoque,
//     quantidadeEstoque
// }