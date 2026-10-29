//Exemplo 1 - Buscar um produto pelo nome

// const produtos = [
//     {nome: "Mouse", preco: 50},
//     {nome: "Teclado", preco: 120},
//     {nome: "Monitor", preco: 850},
//     {nome: "Mouse", preco: 65}
// ]

// const produtoEncontrado = produtos.find(produto => {
//     return produto.nome === "Mouse";
// });

// console.log(produtoEncontrado);

// Exemplo 2 - Localizar um livro pelo código

// const livros = [
//     {codigo: 101, titulo: "JavaScript para Iniciantes", disponivel: true},
//     {codigo: 102, titulo: "Lógica de Programacao", disponivel: false},
//     {codigo: 103, titulo: "Banco de Dados", disponivel: true}
// ];

// const livro = livros.find(livro => livro.codigo === 102);

// if (livro) {
//     console.log("Livro: ", livro.titulo);
//     console.log("Disponivel: ", livro.disponivel);
// } else {
//     // Executa o título e a situação do livro
//     console.log("Livo nao encontrado.");
// }

// Exemplo 3

// Situação real: localizar um registro pelo identificador
const tarefas = [
    {descricao: "Estudar JavaScript", concluida: true},
    {descricao: "Criar o banco de dados", concluida: true},
    {descricao: "Testar a aplicacao", concluida: false},
    {descricao: "Documentar o projeto", concluida: false}
];

// Procura a primeira tarefa que ainda não foi concluída
const tarefaPendente = tarefas.find(tarefa => {
    return tarefa.concluida === false;
});

console.log(tarefaPendente);

