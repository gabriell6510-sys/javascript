import { cadastrarPedido } from "./cadastroPedido";
console.log("\n===== PEDIDOS DE UMA LANCHONETE ====");

while (true) {
    console.log("1 - Cadastrar pedidos");
    console.log("2 - Listar pedidos");
    console.log("3 - Exibir pedidos em JSON");
    console.log("4 - Recuperar pedidos do JSON");
    console.log("5 - listar pedidos recuperados");
    console.log("6 - Sair");

    let opcao = Number(question("Digite uma das opcoes acima: "));

    if (opcao === 6) {
        console.log("Sair do sistema");
        break;   
    }

    switch(opcao) {
        case 1:
            cadastrarPedido();
            break;
            
        case 2:

        case 3:

        case 4:

        case 5:

        default:
            console.log("Informacao invalida! Digite uma das opcoes: ");
            break;
    }
}
