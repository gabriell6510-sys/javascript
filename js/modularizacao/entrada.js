// const readline = require("readline-sync");
import readline from "readline-sync"

export function perguntarTexto(mensagem) {
    try {
        if (mensagem === "" ) {
            throw new Error("Mensagem nao pode ser vazia");
        } else {
            return readline.question(mensagem);
        }
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
};

export function perguntarNumero(mensagem) {
    try {
        if (mensagem === "") {
            throw new Error("Mensagem nao pode ser vazia");
        } else {
            return readline.question(mensagem);
        }
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}

// module.exports = {
//     perguntarTexto,
//     perguntarNumero
// }

