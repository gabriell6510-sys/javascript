let produtos = ["Teclado", "Mouse", "Monitor", "Notebook", "Webcam"];
let quantidade = [12,3,0,7,2];
let semestoque = 0
let maior_zero_menor_tres = 0
let quantidade_total = 0
let contar = 0

for (i = 0; i < produtos.length; i += 1) {
    console.log(`A quantidade de ${produtos[i]} no estoque e ${quantidade[i]}`)
}

for (let i = 0; i < produtos.length; i += 1) {
    if (quantidade[i] <= 0) {
        semestoque += quantidade[i]
        console.log(`O produto sem estoque e: `,produtos[i])
    }
}
for (let i = 0; i < produtos.length; i += 1) {
    if (quantidade[i] > 0 && quantidade[i] <= 3) {
        maior_zero_menor_tres += quantidade[i]
        console.log(`Este produto esta com estoque baixo: `,produtos[i])
    }
}

for (let i = 0; i < produtos.length; i += 1) {
    quantidade_total += quantidade[i] 
}
console.log(`A soma de todos os valores e: `,quantidade_total)

for (let i = 0; i < produtos.length; i += 1) {
    if (quantidade[i] <= 3) {
        contar += 1
    }
}
console.log(`A quantidade de produtos que precisam de reposicao e: `,contar)