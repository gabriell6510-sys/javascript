const { question } = require("readline-sync");
// Fiz o basico, não conseguir pensar
// const media_aluno = () => {
//     console.log("===== Sistema de desempenho escolar =====")
//     let nome_aluno = question("Digite o nome do aluno: ").trim();
//     let nota1 = Number(question("Digite a 1a nota: "));
//     let nota2 = Number(question("Digite a 2a nota: "));
//     let nota3 = Number(question("Digite a 3a nota: "));
//     media = (nota1 + nota2 + nota3) / 3
    
//     console.log("===== Resultado do aluno =====")
//     console.log(`Nome: ${nome_aluno}`);
//     console.log(`Nota 1: ${nota1}`);
//     console.log(`Nota 2: ${nota2}`);
//     console.log(`Nota 3: ${nota3}`);
//     console.log(`Media: ${media.toFixed(2)}`);
//     if (media > 7) {
//         console.log("Aprovado")
//     } else {
//         console.log("Reprovado")
//     }
// }
// media_aluno();

// Solução do professor
const calcularMedia = (notas) => {
    let soma = 0;

    for (let i = 0; i < notas.length; i += 1) {
        soma += notas[i];
    }

    return soma / notas.length;
};

const verificarResultado = (media) => {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperacao";
    } else {
        return "Reprovado";
    }
}

const exibirResultado = (nome,notas,media,situacao) => {
    console.log("\n===== RESULTADO DO ALUNO =====");
    console.log(`Nome: ${nome}`);

    for (let i = 0; i < notas.length; i += 1) {
        console.log(`Nota ${i + 1}: ${notas[i]}`);
    }

    console.log(`Media final: ${media.toFixed(2)}`);
    console.log(`Situacao: ${situacao}`);
}

//Progama principal
console.log("==== SISTEMA DE DESEMPENHO ESCOLAR =====");
let nome = question("Digite o nome do aluno: ").trim();

if (nome === "") {
    console.log("Erro: o nome nao pode ficar vazio");
} else {
    let notas = [];
    let notasValidas = true;

    for (let i = 0; i < 3; i += 1) {
        let nota = Number(question(`Digite a ${i + 1}a nota: `))

        if (nota < 0 || nota > 10) {
            console.log("Nota invalida Digite um valor de 0 a 10.");
            notasValidas = false;
            break;
        }

        notas.push(nota);
    }

    if(notasValidas) {
        let media = calcularMedia(notas);

        let situacao = verificarResultado(media);

        exibirResultado(nome,notas,media,situacao);
    } else {
        console.log("Nao foi possivel calcular o resultado");
    }
}
