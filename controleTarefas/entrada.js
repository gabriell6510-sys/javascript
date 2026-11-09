import {question, questionInt} from "readline-sync"

export function perguntarTexto(mensagem) {
    try {
        if (mensagem === "") {
            throw new Error("Mensagem nao pode ser vazio");
        } else {
            return question(mensagem)
        }
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}

export function perguntarNumero(mensagem) {
    try {
        if (mensagem === "") {
            throw new Error("Mensagem nao pode ser vazio");
        } else {
            return question(mensagem)
        }
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}