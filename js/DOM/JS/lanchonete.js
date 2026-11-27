const nome = document.getElementById("nome");
const cliente = document.getElementById("cliente");
const produto = document.getElementById(".produto");
const quantidade = document.getElementById(".quantidade");
const mensagem = document.getElementById("mensagem");
const resumo = document.getElementById("resumo");
const resultado = document.getElementById("resultado");

const btnTema = document.querySelector("#btnTema");
const btnLimpar = document.querySelector("#btnLimpar");
const btnCalcular = document.querySelector("#btnCalcular");

function calcularPedido() {
    const nome = cliente.value.trim();
    const preco = Number(produto.value);
    const qtd = Number(quantidade.value);

    // Validação dos dados

    if (nome === "" || produto.value === "" || !Number.isInteger(qtd) || qtd <= 0) { // isItenger() ver se é inteiro

        mensagem.textContent = "Preencha os campos corretamente!";
        mensagem.classList.remove("sucesso");
        mensagem.classList.add("erro");
        mensagem.classList.add("oculto");
    }

    const total = preco * qtd;

    // Capturando o texto da opção selecionada

    const nomeProduto = produto.options[produto.selectedIndex].textContent;

    // Exibindo o resumo

    resumo.innerHTML = `
    <p>Cliente: <strong id = "nomeResumo"<>/strong<>/p>
    <p>Produto: ${nomeProduto}</p>
    <p>Quantidade: ${qtd}</p>
    <h3>Total: R$ ${total.toFixed(2)}</h3>
    `
    document.getElementById("nomeResumo").textContent = nome;

    // Exibindo a mensagem de sucesso
    mensagem.textContent = "Pedido calculado com sucesso!";
    mensagem.classList.remove("erro");
    mensagem.classList.add("sucesso");
    resultado.classList.remove("oculto")
}

function limparPedido() {
    const campos = document.querySelectorAll("input", "select");
    campos.forEach(function(campo){
        campo.value = "";
    });
    mensagem.textContent = "";
    resumo.innerHTML = "";
    mensagem.classList.remove("erro","escuro");
    resultado.classList.add("oculto");
    cliente.focus();
}

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("escuro");
    
});

btnCalcular.addEventListener("click", calcularPedido);
btnLimpar.addEventListener("click", limparPedido);

// btnCalcular.addEventListener("click", function () {

//     const nomeCliente = nome.value.trim();

//     if (nomeCliente === "" && produto === "" && quantidade === "") {

//         mensagem.textContent = "Uma das informações estão vazias"

//     } else {

//         mensagem.textContent = "Pedido calculado com sucesso!"
//     }
// });

