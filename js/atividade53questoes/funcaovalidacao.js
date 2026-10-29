const question = require("readline-sync").question;
function validarNome(nome) {
    if (nome.length < 3 ) {
        return true;
    } else {
        return false;
    }
}
let nome = question("Digite seu nome: ").trim();
if (validarNome(nome)) {
    console.log("Nome inválido! Deve ter pelo menos 3 caracteres.");
}

