// o que o sistema precisa receber?

// O usuário adiciona
//       o valor da distância da entrega (km);
//       o valor do peso da encomenda (kg);
//       o tipo da entrega (urgente, media urgencia, pouco urgente);


// o que o sistema precisa calcular?
//       o valor (R$)
//       
//       
// quais as decisões o sistema deve tomar?
//       os critérios pro cálculo:
//       
//       a cada 1km - adiciona 10 reais (multiplicação)
//       a cada 1kg - adiciona 5 reais (multiplicação)
//       urgente - adiciona 10 reais
//       media urgencia - adiciona 5 reais
//       pouco urgente - adicona 2 reais
//       nenhuma-não adiciona nada

//       valor total = (distancia_percorrida * 10) + (peso * 5) + valor da urgência

// quais regras precisam ser verificadas?
//       
//distância e o peso não pode ter valor negativo ou zero;
//tipo de entrega só pode aceitar as opções (1-urgente, 2-media urgencia, 3-pouco urgente, 4-nenhuma) e gerar mensagem de valor inválido se não escolher uma dessas opções;


const { question } = require("readline-sync");

let distancia_percorrida = Number(question("Digite a distancia para a entrega(Km): "))
while (distancia_percorrida <= 0) {
    console.log("Valor invalido")
    console.log("Digite um valor maior que zero")
    distancia_percorrida = Number(question("Digite a distancia para a entrega(Km): "))
    
}
let peso = Number(question("Digite o peso da encomenda(Kg): "))
while (peso <= 0) {
    console.log("Valor invalido")
    console.log("Digite um valor maior que zero")
    peso = Number(question("Digite o peso da encomenda(Kg): "))
    
}
console.log("1- Urgente");
console.log("2- Media Urgencia");
console.log("3- Pouca Urgencia");
console.log("4- Nenhuma");
let escolha = Number(question("Escolha qual o nivel de urgencia do sua entrega: "))

while (distancia_percorrida > 0 && peso > 0) {
    
    if (escolha === 1) {
        valor_total = (distancia_percorrida * 10) + (peso * 5) + 10
        console.log("O valor da sua entrega é R$",valor_total)
        break;
    }
    else if (escolha === 2) {
        valor_total = (distancia_percorrida * 10) + (peso * 5) + 5
        console.log("O valor da sua entrega é R$",valor_total)
        break;
    }
    else if (escolha === 3) {
        valor_total = (distancia_percorrida * 10) + (peso * 5) + 2
        console.log("O valor da sua entrega é R$",valor_total)
        break;
    }
    else if (escolha === 4) {
        valor_total = (distancia_percorrida * 10) + (peso * 5)
        console.log("O valor da sua entrega é R$",valor_total)
        break;
    } else {
        console.log("Valor inválido!")
        console.log("1- Urgente");
        console.log("2- Media Urgencia");
        console.log("3- Pouca Urgencia");
        console.log("4- Nenhuma");
        escolha = Number(question("Escolha qual o nivel de urgencia do sua entrega: "))
    }
}

