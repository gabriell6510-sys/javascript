const { question } = require("readline-sync")
let valor = Number(question("Valo do saldo: "))

console.log("1 -Consultar saldo")
console.log("2 - Depositar saldo")
console.log("3 - Sacar dinheiro")
console.log("4 - Sair")
let escolha = Number(question("Escolha uma opcao de 1 a 4: "))

while(escolha != 4) {
    switch(escolha) {
        case 1:
            console.log("O valor do saldo é de R$",valor)
            escolha = Number(question("Escolha uma opcao de 1 a 4: "))
        case 2:
            let deposito = Number(question("Quanto você quer depositar na sua conta: "))
            let soma = valor + deposito
            console.log("O valor do depósito é R$", deposito)
            console.log("O valor do saldo da conta é de R$", soma)
            escolha = Number(question("Escolha uma opcao de 1 a 4: "))
        case 3:
            let saque = Number(question("Digite o valor que deseja sacar: "))
            if (saque > 0 && saque < valor) {
                let soma_saque = valor + saque
                console.log("O valor do saldo era de R$", valor)
                console.log("O valor do seu novo saldo R$", soma_saque)
                escolha = Number(question("Escolha uma opcao de 1 a 4: "))
            }
        case 4:
            console.log("Encerrado!")
            break;
        default:
            console.log("Opção inválida!")
    }
}