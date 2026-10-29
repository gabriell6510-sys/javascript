const { question } = require("readline-sync");

let vendas = [150,80,250,45,320,120,60]
console.log("===== MENU DE VENDAS DE UMA LOJA =====");
while(true) {
    console.log("1 - Registrar uma nova venda");
    console.log("2 - Exibir todas as vendas registradas");
    console.log("3 - Consultar uma venda pela posicao");
    console.log("4 -Alterar o valor de uma venda");
    console.log("5 - Cancelar uma venda");
    console.log("6 - Exibir o relatorio de vendas");
    console.log("7 - Sair do sistema");
    let escolha = Number(question("Digite uma das opcoes acima:"))
    if (escolha === 7) {
        console.log("Fim do programa");
        break;
    }

    switch(escolha) {

        // Registrar uma nova venda
        case 1:
            let valor_venda = Number(question("Digite o valor da venda: "));
            if (valor_venda > 0) {
                vendas.push(valor_venda)
                console.log("Produto adicionado com sucesso")
                break;
            } else {
                console.log("Valor invalido")
            }

        // Exibir todas as vendas
        case 2:
            for (let i = 0; i < vendas.length; i += 1) {
                console.log(`venda${i + 1}: R$${vendas[i]}`)
            }
            if (vendas === '') {
                console.log("Nao existe valor")
            }
            break;

        // Consultar venda pela posição
        case 3:
            let consulta_venda = Number(question("Informe o indice da venda que voce quer: "))
            for (let i = 0; i < vendas.length; i += 1) {
                if (consulta_venda === i) {
                    console.log(vendas[i])
                } 
                if (consulta_venda < 0) {
                    console.log("Valor invalido")
                }
                break;
            }

        // alterar valor da venda
        case 4:
            let alterar_venda = Number(question("Informe o indice da venda que voce quer alterar: "));
            if (alterar_venda >= 0 && alterar_venda < vendas.length) {
                let alterando_venda = Number(question("Informe o valor da nova venda: "));
                vendas.splice(alterar_venda,1,alterando_venda);
                console.log("Venda substituido com sucesso!");
                console.log(vendas)            
            } else {
                console.log("Indice invalido!");
            }
            break;
        // Cancelar uma venda
        case 5:
            let cancelar_venda = Number(question("Informe o indice da venda que voce deseja excluir: "));
            if (cancelar_venda < vendas.length) {
                vendas.splice(cancelar_venda,1)
                console.log("Venda excluida com sucesso");
            } else {
                console.log("Opcao invalida")
            }
            break;
        // Exibir relatório de vendas
        case 6:
            total = 0;
            media = total / vendas.length
            maior_venda = -Infinity
            menor_venda = Infinity
            maiorcem = 0
            menorcem = 0
            console.log("===== Relatorio de vendas =====")
            for (let i = 0; i < vendas.length; i += 1) {
                console.log(`venda${i + 1}: R$${vendas[i]}`)
            }
            for (let i = 0; i < vendas.length; i += 1) {
                total += vendas[i]
            }
            console.log(`O faturamento total e de R$${total}`)
            console.log(`O valor medio das vendas e de R$${media}`)
            
            for (let i = 0; i < vendas.length; i += 1) {
                if (vendas[i] > maior_venda) {
                    maior_venda = vendas[i]
                }
            } 
            for (let i = 0; i < vendas.length; i += 1) {
                if (vendas[i] < menor_venda) {
                    menor_venda = vendas[i]
                }
            } 

            for (let i = 0; i < vendas.length; i += 1) {
                if (vendas[i] >= 100) {
                    maiorcem += 1
                }
            }
            for (let i = 0; i < vendas.length; i += 1) {
                if (vendas[i] < 100) {
                    menorcem += 1
                }
            }

            console.log("A maior venda e de R$",maior_venda);
            console.log("A menor venda e de R$", menor_venda);
            console.log("Quantidade de valores maiores ou iguais a cem: ", maiorcem);
            console.log("Quantidade de valores menores que cem: ", menorcem);
            if (total > 1000) {
                console.log("O total das vendas deu um valor que 1000.")
            }
            break;
        
        default:
            console.log("Valor incorreto, digite novamente!")
    }   

}

