import { perguntarTexto, perguntarNumero } from "./entrada.js";
import { question, questionInt } from "readline-sync";

export const tarefas = [];

export function cadastrarTarefa() {
    try {
        console.log("\n===== CADASTRO DE TAREFA =====");
        let tituloTarefa = perguntarTexto("Titulo da tarefa: ").trim();
        let descricao = perguntarTexto("Descricao: ").trim();
        let nomeResponsavel = perguntarTexto("Nome do responsavel: ").trim();
        let prioridade = perguntarTexto("Prioridade: ").trim();
        let status = "Pendente"
        const tarefa = {
            id: tarefas.length + 1,
            titulo: tituloTarefa,
            descricao: descricao,
            nome: nomeResponsavel,
            prioridade: prioridade,
            status: status
        }

        if (tituloTarefa === "") {
            throw new Error("Titulo da tarefa nao pode ser vazio.");
        }
        if (descricao === "") {
            throw new Error("Descricao nao pode ser vazio.");
        }
        if (nomeResponsavel === "") {
            throw new Error("Nome do responsavel nao pode ser vazio");
        } else {
            tarefas.push(tarefa)
            console.log("Tarefa cadastrada com sucesso!");
        }
 
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}

export function listarTarefas() {
    try {
        console.log("\n===== LISTAR TAREFAS =====");
    
        if (tarefas.length === 0) {
            throw new Error("Nao existe tarefas cadastradas");
        }

        tarefas.forEach(tarefa => {
            console.log("\nid: ", tarefa.id);
            console.log("titulo: ", tarefa.titulo);
            console.log("Descricao: ", tarefa.descricao);
            console.log("Nome do responsavel: ", tarefa.nome);
            console.log("Prioridade da tarefa: ", tarefa.prioridade);
            console.log("Status: ", tarefa.status);
        })
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
    
}

export function buscarTarefaPorId(listaTarefas) {
    try {

        console.log("\n===== BUSCANDO TAREFA PELO ID =====");

        if (listaTarefas.length === 0) {
            throw new Error("Não existem tarefas cadastradas.");
        }

        let escolhaTarefa = questionInt("Qual tarefa voce quer escolher (ID): ");

        let tarefaEncontrada = listaTarefas.find(tarefa => tarefa.id === escolhaTarefa);
        
        if (tarefaEncontrada) {

            console.log("\n--- Tarefa Encontrada ---");
            console.log("id: ", tarefaEncontrada.id);
            console.log("titulo: ", tarefaEncontrada.titulo);
            console.log("Descricao: ", tarefaEncontrada.descricao);
            console.log("Nome do responsavel: ", tarefaEncontrada.nome);
            console.log("Prioridade da tarefa: ", tarefaEncontrada.prioridade);
            console.log("Status: ", tarefaEncontrada.status);

        } else {
            console.log("Nenhuma tarefa encontrada com esse ID.");
        }
        
    } catch(erro) {
        console.log("Erro: ", erro.message);
    }
}

export function atualizarStatus(novoStatus) {
    try {

        if (tarefas.length === 0) {
            throw new Error("Nao existem tarefas cadastradas.");
        }

        let escolhaTarefaId = questionInt("Digite o ID da tarefa que voce quer atualizar: ");
        
        let atualizaStatus = tarefas.find(tarefa => {
            return tarefa.id === escolhaTarefaId
        }) // Quando usa chaves no arrow function ele tem que usar o return

        if (!atualizaStatus) {
            console.log("Nenhuma tarefa encontrada com esse ID.");
            return;
            
        } 

        console.log("1 - Pendente");
        console.log("2 - Em andamento");
        console.log("3 - Concluida");

        let mudancaStatus = questionInt("Atualize o status da sua tarefa. Digite de 1 a 3: ");

        if (mudancaStatus === 4) {
            let escolha = question("Voce deseja nao mudar o status (sim/nao): ");

        }

        switch(mudancaStatus) {
            case 1:
                atualizaStatus.status = "Pendente";
                console.log("Status atualizado com sucesso, para pendente.");
                break;

            case 2:
                atualizaStatus.status = "Em andamento"
                console.log("Status atualizado com sucesso, para em andamento.");
                break;

            case 3:
                atualizaStatus.status = "Concluida"
                console.log("Status atualizado com sucesso, para concluida.");
                break;

            default:
                console.log("Informacao invalida!");     
            } 
         
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}

export function listarTarefasPorStatus(status) {
    try {
        if (tarefas.length === 0) {
            throw new Error("Nenhuma tarefa cadastrada")
        }

        let tarefaId = question("Informe o status das tarefas que voce quer visualizar: ");
    
        const listarTarefasId = tarefas.filter(tarefa => {
            return tarefa.status === tarefaId;
        });

        console.log("\n---- Tarefas listadas ----");

        if (listarTarefasId) {
            listarTarefasId.forEach(tarefa => {
                console.log(`\nTarefa: ${tarefa.titulo}`);
                console.log(`Nome do responsavel: ${tarefa.nome}`);
                console.log(`Prioridade: ${tarefa.prioridade}`);
                console.log(`\nStatus: ${tarefa.status}`);
            })
            
        }

    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
    
}
