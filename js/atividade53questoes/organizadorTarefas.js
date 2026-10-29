let tarefas = [];
let concluidas = [];

let sistemaAtivo = true;

const readline = require("readline-sync");
while (sistemaAtivo) {
    console.log("=== ORGANIZADOR DE TAREFAS ===");
    console.log("1 - Cadastrar tarefa");
    console.log("2 - Listar tarefas");
    console.log("3 - Marcar tarefa como concluida.");
    console.log("4 - Listar somente tarefas pendentes.");
    console.log("5 - Excluir tarefa.");
    console.log("6 - Apresentar um resumo das tarefas.");
    console.log("7 - Encerrar o sistema.");

    let escolha = readline.questionInt("Escolha uma opcao: ");

    switch (escolha) {
        case 1:
            // Cadastrar tarefa com descrição não vazia e situação inicial pendente (false)
            let descricao = readline.question("Digite a descricao da tarefa: ");
            if (descricao.trim() !== "") {
                tarefas.push(descricao);
                concluidas.push(false); // Situação inicial: pendente
                console.log("Tarefa cadastrada com sucesso!");
            } else {
                console.log("Erro: A descricao da tarefa nao pode ser vazia.");
            }
            break;

        case 2:
            // Listar todas as tarefas apresentando número, descrição e situação
            console.log("\n--- Lista de Tarefas ---");
            if (tarefas.length === 0) {
                console.log("Nenhuma tarefa cadastrada.");
            } else {
                for (let i = 0; i < tarefas.length; i++) {
                    let situacao = concluidas[i] ? "Concluída" : "Pendente";
                    console.log(`${i + 1}. [${situacao}] ${tarefas[i]}`);
                }
            }
            break;

        case 3:
            // Marcar tarefa como concluída informando a posição com validação
            if (tarefas.length === 0) {
                console.log("Nenhuma tarefa cadastrada.");
                break;
            }
            console.log("\n--- Tarefas Atuais ---");
            for (let i = 0; i < tarefas.length; i++) {
                let situacao = concluidas[i] ? "Concluída" : "Pendente";
                console.log(`${i + 1}. [${situacao}] ${tarefas[i]}`);
            }

            let posConcluir = readline.questionInt("Digite o numero da tarefa que deseja marcar como concluida: ") - 1;

            if (posConcluir >= 0 && posConcluir < tarefas.length) {
                if (!concluidas[posConcluir]) {
                    concluidas[posConcluir] = true;
                    console.log("Tarefa marcada como concluída com sucesso!");
                } else {
                    console.log("Esta tarefa já está concluída.");
                }
            } else {
                console.log("Erro: Posição inválida.");
            }
            break;

        case 4:
            // Listar somente tarefas pendentes
            console.log("\n--- Tarefas Pendentes ---");
            let temPendentes = false;
            for (let i = 0; i < tarefas.length; i++) {
                if (!concluidas[i]) {
                    console.log(`${i + 1}. ${tarefas[i]}`);
                    temPendentes = true;
                }
            }
            if (!temPendentes) {
                console.log("Não há tarefas pendentes.");
            }
            break;

        case 5:
            // Excluir tarefa informando a posição com validação
            if (tarefas.length === 0) {
                console.log("Nenhuma tarefa cadastrada.");
                break;
            }
            console.log("\n--- Tarefas Atuais ---");
            for (let i = 0; i < tarefas.length; i++) {
                let situacao = concluidas[i] ? "Concluída" : "Pendente";
                console.log(`${i + 1}. [${situacao}] ${tarefas[i]}`);
            }

            let posExcluir = readline.questionInt("Digite o numero da tarefa que deseja excluir: ") - 1;

            if (posExcluir >= 0 && posExcluir < tarefas.length) {
                tarefas.splice(posExcluir, 1);
                concluidas.splice(posExcluir, 1);
                console.log("Tarefa excluída com sucesso!");
            } else {
                console.log("Erro: Posição inválida.");
            }
            break;

        case 6:
            // Apresentar resumo: total, concluídas e pendentes
            let total = tarefas.length;
            let qtdConcluidas = 0;
            let qtdPendentes = 0;

            for (let i = 0; i < concluidas.length; i++) {
                if (concluidas[i]) {
                    qtdConcluidas++;
                } else {
                    qtdPendentes++;
                }
            }

            console.log("\n--- Resumo das Tarefas ---");
            console.log(`Total de tarefas: ${total}`);
            console.log(`Concluídas: ${qtdConcluidas}`);
            console.log(`Pendentes: ${qtdPendentes}`);
            break;

        case 7:
            // Encerrar o sistema
            console.log("Encerrando o sistema...");
            sistemaAtivo = false;
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}


