const { question } = require("readline-sync");
console.log("==========SISTEMA DE FINANCIAMENTO DE VEÍCULO===========")
//Dados que o programa deverá solicitar
let nome_cliente = question("Digite o seu nome: ");
let idade = question("Digite a sua idade: ");
let salario_mensal = question("Digite o seu salario: ");
let valor_veiculo = question("Informe o valor seu veiculo: ");
let valor_entrada = question("Informe o valor da entrada:  ");
let valor_financeiro = valor_veiculo - valor_entrada
let quantidade_parcelas = question("Em quantas parcelas voce deseja parcelar o seu veiculo: ");
let entrada_minima = (valor_veiculo * 20) / 100
let carteira_habilitacao = question("Voce tem carteira de habilitacao responda Sim ou Nao: ");
let comprometimento_maximo = salario_mensal * 30 / 100
let parcela = valor_financeiro / quantidade_parcelas

// Verificação inicial e Cálculo do financiamento
if (idade >= 18 && carteira_habilitacao === "sim") {
    console.log("Você é maior de idade e tem carteira de habilitação")
    console.log("Valor do veículo: R$ ",valor_veiculo)
    console.log("Valor da entrada: R$ ",valor_entrada)
    console.log("Valor financeiro: R$ ",valor_financeiro)

    // Verificação da entrada
    if (entrada_minima < valor_veiculo) {
        console.log("20% da entrada é ",entrada_minima)
    }
    else {
        console.log("Entrada Insuficiente.")
    }

    // Análise do salário
    if (parcela <= comprometimento_maximo)
        console.log("O cliente poderá coninuar na análise")
    else {
        console.log("Financiamento não aprovado, o valor da parcela ultrapassa 30% do salário")
    }

    // Classificação do financiamento e Taxa de juros
    if (parcela <= 24) {
        console.log("Plano: CURTO PRAZO")
        juros = valor_financeiro * 5 / 100
        valor_total = valor_financeiro + juros
        let nova_parcela = valor_total / quantidade_parcelas
        if (nova_parcela < (salario_mensal * 30 / 100)) {
            console.log("Salário R$ ",salario_mensal)
        } else {
            console.log("Financiamento não aprovado")
        }

        console.log("O valor do juros é R$",juros)
    }
    else if (parcela >= 25 && parcela <= 48) {
        console.log("Plano: MÉDIO PRAZO")
        juros = valor_financeiro * 10 / 100
        valor_total = valor_financeiro + juros
       let nova_parcela = valor_total / quantidade_parcelas
        if (nova_parcela < (salario_mensal * 30 / 100)) {
            console.log("Salário R$ ",salario_mensal)
            console.log("Parcela: R$", nova_parcela)
            console.log("Financiamento Aprovado.")
        } else {
            console.log("Financiamento não aprovado")
        }
        console.log("O valor do juros é R$",juros)
    } else{
        console.log("Plano: LONGO PRAZO")
        juros = valor_financeiro * 15 / 100
        valor_total = valor_financeiro + juros
        let nova_parcela = valor_total / quantidade_parcelas
        if (nova_parcela > (salario_mensal * 30 / 100)) {
            console.log("Salário R$ ",salario_mensal)
        }
        console.log("O valor do juros é R$",juros)
    }
    // Classificação final do cliente
    if (salario_mensal >= 8000 && entrada_minima >= (valor_veiculo * 30 / 100)) {
        console.log("Cliente Premium")
        console.log("Condicoes especias de financiamento")
    }

    if (salario_mensal >= 5000 && entrada_minima >= (valor_veiculo * 20 / 100)) {
        console.log("Cliente Preferencial")
    } else {
        console.log("Cliente Padrao")
    }

    // Situacao especial
    if (idade < 25 || salario_mensal < 3000 || quantidade_parcelas > 48) {
        console.log("Atencao")
        console.log("O financiamento apresenta alto risco de comprometimento de renda.")
    }

} else {
    console.log("Financiamento não autorizado.")
    console.log("Cliente não atende os requesitos necessários")
}

console.log("====== ANÁLISE DE FINANCIAMENTO =====")
console.log("Nome do cliente: ",nome_cliente)
console.log("Idade: ",idade)
console.log("Salario: R$",salario_mensal)
console.log("Valor do veiculo: R$ ",valor_veiculo)
console.log("Valor da entrada: R$ ",valor_entrada)
console.log("Valor financiado: R$ ",valor_financeiro)
console.log("Quantidade de parcelas: ",quantidade_parcelas)

//tofixed(2) duas casas decimais


 
