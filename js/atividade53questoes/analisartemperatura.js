let temperaturas = [28,31,29,34,27,33,30];
maior = -Infinity
menor = Infinity
soma = 0
maior30 = 0
for (let i = 0; i < temperaturas.length; i += 1 ) {
    if (temperaturas[i] > maior  ) {
        maior = temperaturas[i]
    }
    if (temperaturas[i] < menor) {
        menor = temperaturas[i]
    }
    soma += temperaturas[i]
    media = soma / temperaturas.length
    if (temperaturas[i] > 30) {
        maior30 += 1
    }
}
console.log(`O maior numero e o ${maior}`);
console.log(`O menor numero e o ${menor}`);
console.log(`A soma de todas as temperaturas e ${soma}`);
console.log(`A media de todas as temperaturas e ${media.toFixed(2)}`);
console.log(`A quantidade de temperaturas maiores que 30 sao: ${maior30}`);