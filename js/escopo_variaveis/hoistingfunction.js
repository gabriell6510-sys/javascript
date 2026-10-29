// function(quando usa ela pode chamar antes)
//hoisting (Pega a função e joga lá emcima)
const resultado = somar(10,5);
const resultado2 = somar(20,10);
const resultado3 = somar(30,10);

// function somar(num1, num2) {
//     return num1 + num2;
// }

const somar = (num1, num2) => {
    return num1 + num2
}

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
