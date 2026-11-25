const nome = document.getElementById("nome");
const produto = document.querySelector(".produto");
const quantidade = document.querySelector(".quantidade");
const mensagem = document.getElementById("mensagem");

const btnTema = document.querySelector("#btnTema");
const btnCalcular = document.getElementById("#btnCalcular");

btnCalcular.addEventListener("click", function () {

    const nomeCliente = nome.value.trim();

    if (nomeCliente === "" && produto === "" && quantidade === "") {
        mensagem.textContent = "Uma das informações estão vazias"
    } else {
        mensagem.textContent = "Pedido calculado com sucesso!"
    }
});

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("escuro");

});