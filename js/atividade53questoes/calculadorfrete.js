const readline = require("readline-sync");
console.log("Compras inferior a R$100,00, frete de R$20,00");
console.log("Compras de R$100,00 até R$249,99, frete de R$12,00");
console.log("Compras a partir de R$250,00, frete grátis");
let valor_compra = Number(readline.question("Digite o valor da compra: "));
if (valor_compra < 100 && valor_compra > 0) {
    novo_valor = valor_compra + 20;
    console.log(`O valor da compra com o frete de R$20,00 ficou, R$${novo_valor.toFixed(2)}`);
}
else if (valor_compra >= 100 && valor_compra <= 249.99) {
    novo_valor = valor_compra + 12
    console.log(`O valor da compra com o frete de R$12,00 ficou, R$${novo_valor.toFixed(2)}`)
} 
else if (valor_compra >= 250) {
    console.log("Frete grátis");
} else {
    console.log("Entrada inválida.");
}