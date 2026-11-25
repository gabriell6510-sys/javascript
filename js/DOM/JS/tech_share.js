const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");
const titulo = document.querySelector("#titulo");
const primeiroCard = document.querySelector(".card");
const cards = document.querySelectorAll(".card");

const btnSaudar = document.getElementById("btnSaudar");
const btnTitulo = document.getElementById("btnTitulo");
const btnPrimeiro = document.getElementById("btnPrimeiro");
const btnTodos = document.getElementById("btnTodos");
const btnRemover = document.getElementById("btnRemover");

btnSaudar.addEventListener("click", function () {

    const nomeCliente = nome.value.trim();

    if (nomeCliente === "") {

        mensagem.textContent = "Por favor, digite seu nome!";

    } else {
        mensagem.textContent = `Olá, ${nomeCliente}! Seja bem-vindo`
    }
});

btnTitulo.addEventListener("click", function () {
    titulo.textContent = "Ofertas TechStore";

});

btnPrimeiro.addEventListener("click", function () {

    primeiroCard.classList.toggle("destaque");

});

btnTodos.addEventListener("click", function () {
    cards.forEach(function (card) {

        card.classList.add("destaque");

    });
});

btnRemover.addEventListener("click", function () {
    cards.forEach(function (card) {

        card.classList.remove("destaque");

    });
})