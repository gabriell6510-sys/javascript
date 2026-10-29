// Objetos
livro = {
    titulo: "O senhor dos Aneis",
    autor: "J.R.R Tolkin",
    ano: 1937
}

let propriedade = "titulo";

console.log(livro[propriedade]) // Saída: O senhor dos Anéis
livro.titulo = "Dom quixote"
console.log(livro.titulo)

// console.log(livro[propriedade2]) // Saída: J.R.R Tolkin
livro.autor = "Machado de Assis"
console.log(livro.autor)

livro.ano = 1947 // Atualizar
// console.log(livro[propriedade3]) // Saída: 1937
console.log(livro.ano) // Saída: 1937

livro.mes = "Dezembro" // Adicionar
console.log(livro)

delete livro.mes 
console.log(livro)
