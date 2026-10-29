function exibirLivro(livro) {
    console.log("===== DADOS DO LIVRO =====");
    console.log(`Titulo: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano: ${livro.ano}`);
}

let meulivro = [
    {
        titulo: "O Hobbit",
        autor: "J.R.R Tolkien",
        ano: 1937
    },
    
]

exibirLivro(meulivro[0].ano)
// a) Apresente o título.
// console.log(livro.titulo)
// b) Apresente o nome do autor.
// console.log(livro.autor)
// c) Altere o ano de publicação para 1938.
// meulivro.ano = 1938
// d) Altere a disponibilidade para false.
// livro.disponibilidade = false
// e) Apresente uma mensagem com o título, o autor e a situação do empréstimo.
//console.log(`Título: ${livro.titulo} | Autor: ${livro.autor} | Disponível: ${livro.disponivelParaEmprestimo}`);