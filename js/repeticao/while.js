// const readlineSync = require("readline-sync");
// let senha = readlineSync.question("Digite a senha: ");
// nome = readlineSync.question("Digite o seu nome: ")

// const { question } = require("readline-sync");

// while (senha !== "1234") {
//     console.log(nome,"Sua senha está incorreta! Tente novamente.");
//     senha = readlineSync.question("Digite a senha: ")
    
// }
// console.log("Senha correta! Acesso permitido.");

// const readline = require("readline-sync");

// let senha = readline.question("Digite a senha: ");
// let usuario = readline.question("Digite o usuario: ");

// while (senha !== "1234" || usuario !== "admin") {
//     if (senha !== "1234") {
//         console.log("Senha incorreta, tente novamente");
//         senha = readline.question("Digite a senha: ");
//     } else if (usuario !== "admin") {
//         console.log("Usuario incorreto, tente novamente");
//         usuario = readline.question("Digite o usuario: ");
//     }
// }
// console.log("Credenciais corretas, acesso permitido");



//do while (Testa a primeira vez, depois segue, se for false ele não executa da segunda pra frente)

// let numero = question("Digite um numero: ")

// do {
//     console.log("Executou Do While");
// } while (numero < 5);
// let contador = 1
// while (true) {
//     console.log("Contador:", contador);

//     contador++;

//     if (contador > 5) {
//         break;
//     }

// }


const readlineSync = require("readline-sync");
let opcao;

do {
    console.log("===== SISTEMA =====")
    console.log("1 - Cadastrar");
    console.log("2 - Consultar");
    console.log("3 - Relatório");
    console.log("4 - Sair");

    opcao = Number(readlineSync.question("Digite uma opcao: "))

    if (opcao == 1) {
        console.log("Cadastrar");
    }

    else if(opcao == 2) {
        console.log("Consultar")
    }

    else if(opcao == 3) {
        console.log("Relatório");
    }

    else if(opcao == 4) {
        console.log("Encerrando...");
    }

    else{
        
    }
} while (opcao <= 4);