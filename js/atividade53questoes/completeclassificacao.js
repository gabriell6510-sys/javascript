const { question } = require("readline-sync");
console.log("===== Classificação idade ======");
let idade = Number(question("Digite sua idade: "));
if (idade > 18) {
    console.log("Categoria adulta!")
}
else if (idade > 13 && idade < 17) {
    console.log("Categoria juvenil")
}
else if (idade < 13) {
    console.log("Categoria infantil.")
} else {
    console.log("Idade inválida")
}