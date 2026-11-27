let livros = []

const listaLivos = document.getElementById("listaLivros");
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
        const resposta = await fetch("livros.json");

        if (!resposta.ok) {
            throw new Error("Nao existe livro cadastrado no momento");
        }

        livros = await resposta.json()
    } catch(erro) {

    }
}
btnTema.addEventListener("click", () => {

    document.body.classList.toggle("tema-escuro");
    
});

function cadastrarLivro() {
    
    const nomeLivro = titulo.value.trim();
    const autorLivro = autor.value.trim();
    const categoriaLivro = categoria.value.trim();
}