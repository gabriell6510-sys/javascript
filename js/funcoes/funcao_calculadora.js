function somar(a , b) {
    resultado = a + b
    console.log(`A soma entre ${a} + ${b} e: ${resultado} `)
}

function subtrair(a,b) {
    resultado = a - b
    console.log(`O resultado da subtracao de ${a} - ${b} e: ${resultado}`)
}
function multiplicacao(a,b) {
    resultado = a * b
    console.log(`O resultado da subtracao de ${a} x ${b} e: ${resultado}`)
}
function divisao(a,b) {
    if (b === 0) {
        console.log("A divisao nao pode ser realizada")
    } else {
        resultado = a / b
        console.log("O resultado da divisao")
    }
}