const nome = document.getElementById("nome");
const produto = document.querySelector(".produto");
const quantidade = document.querySelector(".quantidade");
const mensagem = document.getElementById("mensagem");
const resumo = document.getElementById("resumo")
const resultado = document.getElementById("resultado")

const btnTema = document.querySelector("#btnTema");

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("escuro");

});

const btnCalcular = document.getElementById("#btnCalcular");

btnCalcular.addEventListener("click", function () {

    const nomeCliente = nome.value.trim();
    const nomeProduto = produto.value.trim();
    const qtd = quantidade.value.trim();

    if (nomeCliente === "" || nomeProduto === "" || qtd === "") {

        mensagem.textContent = "Preencha uma das informações antes de calcular"

    } else {
        resultado.classList.remove("oculto")
        mensagem.textContent = "Pedido calculado com sucesso!";
        
        resumo.innerHTML = `<p>Resumo do pedido</p>
        <p>Cliente: ${nome.value}</p>
        <p>Produto: ${produto.value}</p>
        <p>Quantidade: ${quantidade.value}</p>`
    }
});

