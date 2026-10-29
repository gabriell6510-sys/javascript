//readline(entrada de dados do js)
const readline = require("readline") // Chama a biblioteca
const entrada = readline.createInterface({ // Cria a interface 
    input: process.stdin, // teclado
    output: process.stdout // terminal      
});

entrada.question("Digite sua idade: ", (idade) => { // => função, question(Pergunta, faz o papel do input)
    idade = Number(idade);

    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }

    entrada.close(); // Depois da lógica ele "limpa" a variável 
})


