const { question } = require("readline-sync"); // entrada de dados

let nota = question("Digite sua nota: ");

if (nota >= 7) {
    console.log('Aprovado');
} else if (nota >= 5) {
    console.log("Recuperação")
} else{
    console.log("Reprovado")
}


// {} delimita os códigos que serão executados 
