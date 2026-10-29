const readline = require("readline-sync");
const senhaCorreta = "js2026";
let senhaDigitada = "";
while (senhaCorreta === "js2026") {
    senhaDigitada = readline.question("Digite a senha: ");
    if (senhaDigitada !== senhaCorreta) {
        console.log("Senha incorreta. Tente novamente.");
    } else {
        console.log("Senha correta")
        break;
    }
    
}
console.log("Acesso autorizado!");