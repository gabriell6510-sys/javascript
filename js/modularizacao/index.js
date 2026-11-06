// Arquivo: index.js

// const calculadora = require("./calculadora");
import {question, questionInt} from "readline-sync";
import { perguntarNumero, perguntarTexto} from "./entrada.js";
import { calcularEstoque, quantidadeEstoque} from "./relatorio.js";
import { cadastrarProduto, listarProdutos, buscarProduto, produtos} from "./produtos.js";


while(true) {
    console.log("\n======= SISTEMA DE ESTOQUE ======");
    console.log("1 - Cadastrar produto");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produto");
    console.log("4 - Valor total do estoque");
    console.log("5 - Quantidade total de itens");
    console.log("6 - Sair");

    let opcao = questionInt("Digite uma das opcoes acima");

    switch(opcao) {
        case 1:
            cadastrarProduto();
            break;

        case 2:
            listarProdutos();
            break;

        case 3:
            buscarProduto();
            break;

        case 4:
            const total = calcularEstoque(produtos);
            console.log("\nValor total do estoque: R$", total.toFixed(2));
            break;
            

        case 5:
            const quantidade = quantidadeEstoque(
                produtos
            );

            console.log("\nQuantidade total de itens:", quantidade);
            break;

        case 6:
            console.log("\nEncerrando o sistema...");
            process.exit(); // para tudo

        default:
            console.log("\nOpcao invalida!");
            
            
    }
    
}
// Utilizando as funções importadas
// console.log(calculadora.somar(10, 5));
// console.log(calculadora.subtrair(10, 5));
// console.log(calculadora.multiplicar(10, 5));
// console.log(calculadora.dividir(10, 5));

// import {somar, subtrair, multiplicar, dividir } from "./calculadora.js"