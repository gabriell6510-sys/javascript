// 1. Criação do objeto equipamento
let equipamento = {
    nome: "Notebook",
    marca: "Dell",
    preco: 3500.00,
    quantidadeEmEstoque: 10,
    situacaoDeFuncionamento: true
};

// 2. Modificar a quantidade em estoque e a situação de funcionamento
equipamento.quantidadeEmEstoque = 7;
equipamento.situacaoDeFuncionamento = false; // Ex: em manutenção / com defeito

// 3. Apresentar todas as informações do equipamento
console.log("=== CADASTRO DE EQUIPAMENTO ===");
console.log(`Nome: ${equipamento.nome}`);
console.log(`Marca: ${equipamento.marca}`);
console.log(`Preço: R$ ${equipamento.preco}`);
console.log(`Quantidade em estoque: ${equipamento.quantidadeEmEstoque}`);
console.log(`Situação de funcionamento: ${equipamento.situacaoDeFuncionamento}`);