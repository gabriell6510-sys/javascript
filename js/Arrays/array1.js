// let numeros = [45, 52, 67, 15]
// console.log(numeros)

// let dados = ['Gabriel', 21, 'Programador', true,'']
// console.log(dados)
// console.log(dados[4])

// dados[0] = "Diego Fernandes"
// console.log(dados)

// console.log(dados.length - 1)


// let frutas = ['Banana', 'Maca', 'Pera', 'Uva']

// console.log(frutas.length)
// frutas.pop() // remove o último elemento do array
// console.log(frutas)

// frutas.shift() // remove o primeiro elemento do array
// console.log(frutas)

// frutas.push('Abacaxi') // adiciona um elemento no final do array
// console.log(frutas)

// frutas.unshift('Melancia') // adiciona um elemento no início do array
// console.log(frutas)

// length(Quantas posições o array tem)
// length - 1 (Valor do último índice)
// push(adiciona um elemento no final do array)
// unshift(adiciona um elemento no início do array)

let frutas = ["Maçã", "Banana", "Uva", "Laranja"];
console.log(frutas);

frutas.splice(2, 0, "Morango"); // 2(INDICE), 0(PRA VER QUANTAS COISAS QUERO EXCLUIR), "MORANGO"()

let frutas2 = ["Maçã","Banana","Uva","Laranja"];

frutas2.splice(2,1); // 2(INDICE), 1(EXCLUIR UM ELEMENTO DEPOIS DO 2° INDICE)

console.log(frutas2)