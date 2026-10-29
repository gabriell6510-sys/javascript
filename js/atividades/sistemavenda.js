let vendas = [120,45,300,80,250,35,500]
let somavenda = 0
let contarvenda = 0
let maiorvenda = -Infinity
let somavenda100 = 0
let mensagem = 0
for (i = 0; i < vendas.length; i += 1) {
    somavenda += vendas[i]
    console.log(`Venda${i + 1}: R$${vendas[i]}`)
}
console.log("=====SOMA DAS VENDAS=====")
console.log("A Soma de todas as vendas e R$",somavenda)

for (i = 0; i < vendas.length; i += 1) {
    if (vendas[i] === 100 || vendas[i] > 100) {
        contarvenda += 1
    }
}
for (i = 0; i < vendas.length; i += 1) {
    if (vendas[i] > maiorvenda ) {
        maiorvenda = vendas[i]
    }
}
for (i = 0; i < vendas.length; i += 1) {
    if (vendas[i] < 100) {
        somavenda100 += vendas[i]
    }
}

    

console.log("\n=====QUANTIDADE DE VENDAS IGUAIS A 100 OU MAIORES QUE 100=====")
console.log("A quantidade de vendas com valores maiores ou iguais a 100: ",contarvenda)
console.log("\n=====A maior venda=====")
console.log("A maior venda e a de R$: ",maiorvenda)
console.log("\n=====SOMA DE VENDAS ABAIXO DE 100=====")
console.log("A soma das vendas abaixo de 100: ",somavenda100)
console.log("\n====MENSAGEM, TOTAL DE VENDAS MAIOR QUE 1000====")
if (somavenda > 1000) {
    console.log("A soma das vendas e maior que 1000")
} else {
    console.log("A soma das vendas e menor que 100")
}




