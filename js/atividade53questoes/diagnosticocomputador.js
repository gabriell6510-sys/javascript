const { question } = require("readline-sync");

console.log("====== DIAGNÓSTICO DE UM COMPUTADOR =====");
console.log("O computador está ligado?");
let computador = question("Digite sim ou nao: ").trim().toLowerCase();
console.log("A conexao de rede esta funcionando?");
let conexao_rede = question("Digite sim ou nao: ").trim().toLowerCase();
console.log("O usuário consegue acessar o sistema?")
let acesso = question("Digite sim ou nao:").trim().toLowerCase();

if (computador === "sim" && conexao_rede === "sim" && acesso === "sim") {
    console.log("O computador esta em perfeitas condições.")
}

else if (computador === "nao" && conexao_rede === "sim" && acesso === "sim") {
    console.log("O computador precisa de uma vereficação na alimentação elétrica.")
}

else if (computador === "sim" && conexao_rede === "nao" && acesso === "sim") {
    console.log("O computador precisa de uma vereficação na rede.")
}

else if (computador === "sim" && conexao_rede === "sim" && acesso === "nao") {
    console.log("O computador precisa ser reiniciado.")
} 
else if (computador === "sim" && conexao_rede === "nao" & acesso === "nao") {
    console.log("O computador precisa ser reiniciado.")
    console.log("Se não funcionar,o computador precisa de uma vereficação na rede")
}
else if (computador === "nao" && conexao_rede === "nao" && acesso === "sim") {
    console.log("O computador precisa de uma vereficação na alimentação elétrica.")
    console.log("Se não funcionar,o computador precisa de uma vereficação na rede")
}
else if (computador === "nao" && conexao_rede === "sim" && acesso === "nao") {
    console.log("O computador precisa de uma vereficação na alimentação elétrica.")
    console.log("se não funcionar,o computador precisa ser reiniciado.")
}

else {
    console.log("O computador precisa ser levado para suporte técnico")
}