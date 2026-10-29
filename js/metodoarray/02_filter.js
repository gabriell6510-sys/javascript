// Exemplo 1 - Filtrar produtos dentro do orçamento

// const produtos = [
//     {nome: "Mouse", preco: 50 },
//     {nome: "Teclado", preco: 120 },
//     {nome: "Monitor", preco: 850 },
//     {nome: "Webcam", preco: 150 }
// ];

// // Seleciona todos os produtos que custam até R$ 150,00
// const produtosAcessiveis = produtos.filter(produto => {
//     return produto.preco <= 150;
// });

// console.log(produtosAcessiveis);

// const livros = [
//     {titulo: "JavaScript", disponivel: true},
//     {titulo: "Python", disponivel: false},
//     {titulo: "Banco de Dados", disponivel: true},
//     {titulo: "Redes de Computadores", disponivel: false}
// ]

// const livroDisponivel = livros.filter(livro => {
//     return livro.disponivel === true;
// });

// // Exiba cada livro encontrado
// // console.log(livroDisponivel);

// livroDisponivel.forEach(livro => {
//     console.log(livro.titulo);
// })
// Parametro(Registro de um objeto)

// Exemplo 3 - Filtrar chamados de suporte abertos

const chamadas = [
    {numero: 1, setor: "Financeiro", status: "aberto" },
    {numero: 2, setor: "TI", status: "resolvido" },
    {numero: 3, setor: "RH", status: "aberto" },
    {numero: 4, setor: "TI", status: "aberto" },
];

const filtrarChamada = chamadas.filter(chamada => {
    return chamada.status === "aberto";
});


filtrarChamada.forEach(chamada => {
    console.log(`O setor ${chamada.setor} fica na sala ${chamada.numero}, e o status da sala e ${chamada.status}`);
});

