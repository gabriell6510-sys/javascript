// const array = [10, 25, 38, 46, 50]

// let soma = 0

//     for (let i = 0; i < array.length; i += 1) {
//         soma += array[i]
//     }
// console.log(soma)
let maior = 0
let produtos = ["Teclado","Mouse","Notebook","Impressora"]
for (let i = 0; i < produtos.length; i+= 1) {
    console.log(i,":",produtos[i])
    if (i >= 2) {
        console.log(produtos[i])
    }
}
