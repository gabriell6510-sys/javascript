const { question } = require("readline-sync")

console.log("======Atendimento Loja======")
console.log("1 - Comprar produto")
console.log("2 - Consultar estoque")
console.log("3 - Solcitar entrega")
console.log("4 - Sair")

let escolha = Number(question("Decida qual opcao voce quer escolhe, escolha de (1 a 4): "))


switch(escolha) {
    //Comprar produto
    case 1:
        let valor = question("Qual valor da sua compra: ")
        let cartao_loja = question("Voce possui o cartao da loja, responda (sim,nao): ")
        let desconto_10 = 10
        let desconto_5 = 5
        
        if (valor >= 200 && cartao_loja === "sim") {
            let valor_desconto = valor * (desconto_10  / 100)
            let valor_final = valor - valor_desconto
            console.log("Valor da compra:R$",valor)
            console.log("Desconto:",desconto_10,"%")
            console.log("Valor do desconto: R$",valor_desconto.toFixed(2))
            console.log("Valor final: R$",valor_final.toFixed(2))
        }
        else if (valor >= 200 || cartao_loja === "sim") {
            let valor_desconto = valor * (desconto_10  / 100)
            let valor_final = valor - valor_desconto
            console.log("Valor da compra: R$ ",valor)
            console.log("Desconto: ",desconto_5,"%")
            console.log("Valor do desconto: R$",valor_final)
        } else {
            console.log("sem desconto.")
        }
        break;
    // Consultar estoque
    case 2:
        let unidades = Number(question("Digite a quantidade dem estoque: "))
        if (unidades > 20) {
            console.log("Estoque alto")
        }
        else if (unidades >= 6 && unidades <= 20) {
            console.log("Estoque normal")
        }
        else if(unidades >= 1 && unidades <=5) {
            console.log("Estoque baixo")
        } else{
            console.log("Produto esgotado")
        }
        // Solicitar entrega

        case 3:
            let entrega = Number(question("Qual a distância pro frete: "))
            if (entrega <= 5) {
                console.log("Entrega disponível e gratuita")
            }
            else if(entrega > 5 && entrega <= 15) {
                console.log("Entrega disponível com taxa")
            } else{
                console.log("Entrega disponível com taxa")
            }
}

    
