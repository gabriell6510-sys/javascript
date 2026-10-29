const { question } = require("readline-sync");

let quantidade_vendas = Number(question("Quantas vendas voce deseja cadastrar: "))
let soma_vendas = 0
let soma_valores = 0
let maior_venda = -Infinity// Inicia com o menor valor
let menor_venda = Infinity // Inicia com o maior valor
let media_venda = 0
let quantidade_venda_500 = 0

for (i = 0; i < quantidade_vendas; i++) {
    let venda = Number(question(`Digite o valor da venda ${i + 1}:`))
    soma_vendas ++; 
    soma_valores += venda;
    media_venda = soma_valores / quantidade_vendas
    if (venda > maior_venda) {
        maior_venda = venda;
    }
    if (venda < menor_venda) {
        menor_venda = venda;
    }

    if (venda > 500) {
        quantidade_venda_500 ++;
    }
}
console.log("O total de vendas foi R$", soma_valores)
console.log("O números de vendas foi: ", soma_vendas)
console.log("O maior valor é R$",maior_venda)
console.log("A menor venda é a de R$",menor_venda)
console.log("A média das vendas é R$",media_venda.toFixed(2))
console.log("Quatidades de Vendas acima de 500:",quantidade_venda_500)
if (soma_valores >= 5000) {
        console.log("Excelente")
    }
    if (soma_valores >= 3000) {
        console.log("Bom")
    }
    if (soma_valores >= 1000) {
        console.log("Regular")
    }
    if (soma_valores < 1000) {
        console.log("Ruim")
    }

//-Infinity(Dentro do intervalo de "[200,500,100]",ele começou com o 200 pra ele o 200 é o menor número)
// Quando eu faço o código de if (venda > maior_venda e na linha abaixo coloco maior_venda = venda ela substitui o 200 pelo 100 ) 
//Infinity(Dentro do intervalo de "[200,500,100]",ele começou com 200 o  pra ele o 200 é o menor número)
// Quando eu faço o código de if (venda < menor_venda e na linha abaixo coloco menor_venda = venda ela substitui o 200 pelo 500)