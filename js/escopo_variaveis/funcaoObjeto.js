function exibirLivro(livro) {
    console.log("===== DADOS DO LIVRO =====");
    console.log(`Titulo: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano: ${livro.ano}`);
}

let meulivro = [
    {
        titulo: "Dom Casmurro",
        autor: "Macahdo de Assis",
        ano: 1899
    },
    {
        titulo: "O Senhor dos Aneis",
        autor: "J.R.R Tolkien",
        ano: 1954
    },
    {
        titulo: "O homem mais rico da babilonia",
        autor: "Macahdo de Assis",
        ano: 1899
    }
]

exibirLivro(meulivro[0].ano)