// const entrada = require("readline-sync")

// function VerficarResultado(nota) {
//     if (nota >= 7) {
//         return "Aprovado"
//     } else{
//         return "Reprovado"
//     }
// }
// let notas = []
// for (i = 0; i < 3; i += 1) {
//     let nota = Number(entrada.question(`Digite a ${i + 1} nota: `))
//     notas.push(nota);
// }
// //Calculo da media
// let soma = 0

// for (let i = 0; i < notas.length; i++) {
//     soma += notas[i]
// }

// let media = soma / notas.length;
// let resultado = VerficarResultado(media);

// //Exibição dos rsultados
// console.log("\n===== RESULTADO DO ALUNO:=====")
// console.log("Notas:", notas);
// console.log("Medias:", media.toFixed(2));
// console.log("Situacoes: ", resultado);

// const entrada = require("readline-sync")
// let notas = []

// while (true) {
//     console.log("1 - Informar notas");
//     console.log("2 - Calcular media");
//     console.log("3 - Emitir Resultado");
//     console.log("4 - Sair");
//     let escolha = Number(entrada.question("Escolha uma das opcoes: "))

    
//     switch(escolha) {
//         case 1:
//             let informarnotas = Number(entrada.question("Digite uma nota: "))
//             notas.push(informarnotas)
//             break;

//         case 4:
//             if (escolha === 4) {
//                 break;
//             }
//     }    
// }
// console.log(notas)


// const entrada = require('readline-sync');

// function vereficarResultado(nota) {
//     if (nota >= 7) {
//         return 'Aprovado';
//     } else {
//         return 'Reprovado';
//     }
// }

// let nota = Number(entrada.question("Digite a nota: "));
// let resultado = vereficarResultado(nota)
// console.log(`Resultado: ${resultado}`);

// let vendas = [150,80,250,45,320];

// function calcularFaturamento(lista) {
//     let total = 0;
//     for (let i = 0; i < vendas.length; i += 1) {
//         total += lista[i]
//     }
//     return total;
// }

// function contarVendasAltas(lista) {
//     let quantidade = 0;
//     for (let i = 0; i < lista.length; i += 1) {
//         if ([vendas[i]] > 100) {
//             quantidade += 1;
//         }
//     }
//     return quantidade;
// }

// console.log(`Faturamento: R$ ${calcularFaturamento(vendas)}`);
// console.log(`Vendas acima de R$ 100: R$ ${contarVendasAltas(vendas)}`);


// const entrada = require('readline-sync');
// let produtos = ['Mouse','Teclado','Monitor'];
// let opcao = 0;

// function listarProdutos(lista) {
//     for (let i = 0; i < lista.length; i += 1) {
//         console.log(lista[i]);
//     }
// }

// while (opcao !== 3) {
//     console.log("\n1 - listar produtos");
//     console.log("2 - Quantidade de produtos");
//     console.log("3 - Sair");
//     opcao = Number(entrada.question("Escolha: "));

//     switch(opcao) {
//         case 1:
//             listarProdutos(produtos);
//             break;
        
//             case 2:
//                 console.log(`Quantidade: ${produtos.length}`);
//                 break;

//             case 3:
//                 console.log("Encerrando...");
//                 break;

//             default:
//                 console.log("Opcao invalida")
//     }
// }

const entrada = require('readline-sync');
let produtos = ['Mouse','Teclado','Monitor','Mouse'];
let precos = [50,120,800,50];

function calcularTotal(valores) { // parametro é o valores, e o argumento é a que o usuario digita ao chamar a funcao
    let total = 0;
    for (let i = 0; i < valores.length; i += 1) {
        if (precos[i] === produtos[i]) {
            quantidade += 1;
        }
    }
    return quantidade;
}

function contarProduto(lista,nome) {
    let quatidade = 0;
}

let opcao = 0;
while (opcao !== 4) {
    console.log("\n=== LOJA DE INFORMATICA ===");
    console.log("1 -listar produtos");
    console.log("2 - calcular valor total");
    console.log("3 - consultar produto");
    console.log("4 - Sair");
    opcao = Number(entrada.question("Escolha: "));

    switch(opcao) {
        case 1:
            for (let i = 0; i < produtos.length; i += 1) {
                console.log(`${produtos[i]} - ${precos[i]}`);
            }
        break;

        case 2:
            console.log(`Total: R$ ${calcularTotal(precos)}`);
            break;

        case 3:
            let nome = entrada.question("Produto: ");
            let quantidade = contarProduto(produtos, nome);

            console.group(`Encontrado(a): ${quantidade}`);

        case 4:
            console.log(`Programa encerrado`);
            break;

        default:
            console.log(`Opcao invalida`);
    }
}

