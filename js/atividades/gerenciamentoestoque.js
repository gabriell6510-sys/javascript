const entrada = require("readline-sync");
let produtos = ["Teclado", "Mouse", "Monitor", "Notebook", "Impressora"]

while (true) {
    console.log("=====MENU GERENCIAMENTO DE ESTOQUE=====");
    console.log("1 - Listar produtos");
    console.log("2 - Adicionar produto no final da lista");
    console.log("3 - Adicionar produto no inicio da lista");
    console.log("4 - Remover o ultimo produto");
    console.log("5 - Consultar um produto");
    console.log("6 - Substituir produto ");
    console.log("7 - Remover qualquer produto");
    console.log("8 - Sair");
    let escolha = Number(entrada.question("Digite uma das opcoes acima: "));

    if (escolha === 8) {
        console.log("Fim do programa")
        break;
    }

    switch (escolha) {
        case 1:
            for (let i = 0; i < produtos.length; i += 1) {
                console.log(`produto ${i + 1}: ${produtos[i]}`)
            }
            break;

        case 2:
            let adicionar_final = entrada.question("Adicione um produto no final da lista: ")
            produtos.push(adicionar_final)
            console.log("Produto adicionado com sucesso")
            break;
        case 3:
            let adicionar_inicio = entrada.question("Adicione um produto no inicio da lista: ")
            produtos.unshift(adicionar_inicio)
            console.log("Produto adicionado com sucesso")
            break;

        case 4:
            produtos.pop()
            console.log("Produto removido")
            break;

        case 5:
            let consultar_produto = Number(entrada.question("Escolha um indice de 0 a quantos estao na lista: "))
            for (let i = 0; i < produtos.length; i += 1) {
                if (consultar_produto === i) {
                    console.log(produtos[i])    
            }
            }
            break;
        case 6:
            let Substituir_produto_indice = Number(entrada.question("Escolha o indice do produto que voce deseja substituir: "));
            
            // Valida se o índice existe no array
            if (Substituir_produto_indice >= 0 && Substituir_produto_indice < produtos.length) {
                let Substituindo_produto = entrada.question("Qual produto voce deseja colocar: ");
                
                // O splice recebe o índice direto, sem precisar de loop
                produtos.splice(Substituir_produto_indice, 1, Substituindo_produto);
                console.log("Produto substituído com sucesso!");
                console.log(produtos);
            } else {
                console.log("Indice invalido!");
            }
            break; // <--- Faltava o break aqui!

        case 7: 
            console.log(produtos)
            let remover_produto_indice = Number(entrada.question("Escolha o indice do produto que voce deseja remover de 0 a 4: "))
            // let remover_produto = entrada.question("Escolha o produto que deseja remover: ")
            if (remover_produto_indice < produtos.length) {
                produtos.splice(remover_produto_indice, 1)
            } else {
                console.log("Opcao invalida")
            }
            break;
            
    }

}