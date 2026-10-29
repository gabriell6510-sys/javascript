const { question } = require("readline-sync");

let lista_filme = [];

while (true) {
    console.log("\n--- MENU DE FILMES ---");
    console.log("1. Adicionar filme");
    console.log("2. Listar filmes");
    console.log("3. Remover filme por posição");
    console.log("4. Pesquisar filme");
    console.log("5. Encerrar programa");
    
    let escolha = Number(question("Escolha uma das opcoes: "));
    
    if (escolha === 5) {
        console.log("Encerrando o programa...");
        break;
    }

    switch(escolha) {
        case 1:
            let adicionar_filme = question("Escolha um filme para adicionar: ");
            // Requisito: Não permita adicionar títulos vazios
            if (adicionar_filme.trim() === "") {
                console.log("Erro: O título do filme não pode estar vazio!");
            } else {
                lista_filme.push(adicionar_filme);
                console.log("Filme adicionado com sucesso!");
            }
            break;
        
        case 2:
            // Requisito: Verifique se a lista está vazia antes de listar
            if (lista_filme.length === 0) {
                console.log("A lista de filmes está vazia.");
            } else {
                console.log("\nFilmes cadastrados:");
                for (let i = 0; i < lista_filme.length; i++) {
                    console.log(`[Índice ${i}] ${lista_filme[i]}`);
                }
            }
            break;

        case 3:
            // Requisito: Verifique se a lista está vazia antes de remover
            if (lista_filme.length === 0) {
                console.log("A lista está vazia, não há o que remover.");
                break;
            }

            let remover_posicao = Number(question("Escolha o indice do filme que voce quer remover: "));
            
            if (remover_posicao >= 0 && remover_posicao < lista_filme.length) {
                for (let i = 0; i < lista_filme.length; i += 1) {
                    if (i === remover_posicao) {
                        lista_filme.splice(remover_posicao, 1);
                        console.log("Filme removido com sucesso!");
                        break;
                    }
                }
            } else {
                console.log("Índice inválido!");
            }
            break; // IMPORTANTE: o break aqui evita que caia direto no case 4!
        
        case 4:
            if (lista_filme.length === 0) {
                console.log("A lista está vazia.");
                break;
            }

            let pesquisar_filme = question("Pesquise um filme: ");
            let encontrado = false;

            // O prompt de pesquisa fica fora do loop para não pedir o nome a cada volta
            for (let i = 0; i < lista_filme.length; i += 1) {
                if (pesquisar_filme.toLowerCase() === lista_filme[i].toLowerCase()) {
                    console.log(`Filme encontrado no índice ${i}!`);
                    encontrado = true;
                    break;
                }
            }

            // Requisito: Informe quando uma pesquisa não encontrar o filme
            if (!encontrado) {
                console.log("Filme não encontrado na lista.");
            }
            break;

        default:
            console.log("Opção inválida! Escolha entre 1 e 5.");
            break;
    }
}