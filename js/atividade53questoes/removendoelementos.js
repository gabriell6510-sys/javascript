const { question } = require("readline-sync");

let tarefas = [
    "Estudar JavaScript",
    "Praticar arrays",
    "Revisar funções",
    "Estudar objetos",
    "Resolver exercícios"
];


let remover_item;
while (true) {
    console.log("1. Apresente as tarefas cadastradas");
    console.log("2. Solicite o índice da tarefa que deverá ser removida.");
    console.log("3. Verifique se o índice é válido.");
    console.log("4. Remova a tarefa selecionada.");
    console.log("5.  Apresente o array atualizado.");
    console.log("6.  Sair");
    let escolha = Number(question("Escolha uma das opcoes acima: "))
    if (escolha === 6) {
        console.log("Encerrando");
        break;
    }
    switch(escolha) {
        case 1:
            for (let i = 0; i < tarefas.length; i += 1) {
               console.log(`Tarefa ${i + 1}: ${tarefas[i]}`) 
            }
            break;
        
        case 2:
            remover_item = Number(question("Solicite o indice do item que voce quer excluir: "));
            break;
                    
        case 3:
            for (let i = 0; i < tarefas.length; i += 1) {
                if (remover_item > 4 || remover_item < 0) {
                    console.log("Esse indice não existe.")
                    break;
                } else {
                    console.log("O indice e valido");
                    break;
                }
            }

        case 4:
            if (remover_item >= 0 && remover_item <= tarefas.length) {
                for (let i = 0; i < tarefas.length; i += 1) {
                    if (i === remover_item) {
                        tarefas.splice(remover_item,1)
                        console.log("Tarefa removida com sucesso!")
                        break;
                    }
                }
            }
            break;
        
        case 5:
            console.log("Depois das atualizacoes")
            console.log(tarefas)
            
    }
}   