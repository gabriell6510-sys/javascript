let livros = [];

const listarLivros = document.getElementById("listaLivros");
const campoPesquisa = document.getElementById("campoPesquisa");
const filtroCategoria = document.getElementById("filtroCategoria");

const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const categoria = document.getElementById("categoria");
const ano = document.getElementById("ano");

const btnCadastrar = document.getElementById("btnCadastrar");
const btnTema = document.getElementById("btnTema");

const mensagem = document.querySelector("#mensagem");
const body = document.querySelector("body");


async function carregarLivros() {
    try {
        const response = await fetch("./dados/livros.json");

        if (!response.ok) {
            throw new Error("Erro HTTP:" + response.status);

        } else {

            livros = await response.json();

            listarLivros.innerHTML = ''

            livros.forEach(livro => {

                listarLivros.innerHTML += `
                    <div class="card ${listarLivros}">
                    <div class="capa">📖</div>
                    <h3>${livro.titulo}</h3>
                    <p><strong>Autor:</strong> ${livro.autor}</p>
                    <p><strong>Categoria:</strong> ${livro.categoria}</p>
                    <p><strong>Ano:</strong> ${livro.ano}</p>
                </div>
            `
            })
            
            
        }
        
    } catch(erro) {
        mensagem.textContent = "Erro: " + erro.message;
    }
}
btnTema.addEventListener("click", () => {

    document.body.classList.toggle("tema-escuro");
    
});
carregarLivros()
// function cadastrarLivro() {
    
//     const nomeLivro = titulo.value.trim();
//     const autorLivro = autor.value.trim();
//     const categoriaLivro = categoria.value.trim();
// }