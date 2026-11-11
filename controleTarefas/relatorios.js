import { perguntarTexto, perguntarNumero } from "./entrada.js";
import { question, questionInt } from "readline-sync";
import { cadastrarTarefa, listarTarefas, buscarTarefaPorId, atualizarStatus, listarTarefasPorStatus , tarefas } from "./tarefas.js";


export function relatorioGeral() {
    try {
        if (tarefas.length === 0) {
            throw new Error("Nao tem tarefa cadastrada.")
        }

        let totalTarefas = tarefas.length;

        let tarefasPendentes = tarefas.filter(tarefa => tarefa.status === "Pendente").length;
        let tarefasEmAndamento = tarefas.filter(tarefa => tarefa.status === "Em andamento").length;
        let tarefasConcluidas = tarefas.filter(tarefa => tarefa.status === "Concluida").length;

        console.log(`\nTotal de tarefas cadastradas: ${totalTarefas}`);
        console.log(`Total de tarefas Pendentes: ${tarefasPendentes}`);
        console.log(`Total de tarefas em andamento: ${tarefasEmAndamento}`);
        console.log(`Total de tarefas concluidas: ${tarefasConcluidas}`);

    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
    
}

export function relatorioPrioridade() {
    try {
        if (tarefas.length === 0) {
            throw new Error("Nao tem tarefa cadastrada.")
        }

        let tarefasBaixas = tarefas.filter(tarefa => tarefa.prioridade === "Baixa").length;
        let tarefasMedias = tarefas.filter(tarefa => tarefa.prioridade === "Media").length;
        let tarefasAltas = tarefas.filter(tarefa => tarefa.prioridade === "Alta").length;

        console.log(`Total de tarefas com prioridade baixa: ${tarefasBaixas}`);
        console.log(`Total de tarefas com prioridade media: ${tarefasMedias}`);
        console.log(`Total de tarefas com prioridade alta: ${tarefasAltas}`);
        
    } catch(erro) {
        console.log("Erro: " + erro.message);
        
    }
}

export function relatorioResponsaveis() {
    try {
        if (tarefas.length === 0) {
            throw new Error("Nao tem tarefa cadastrada.");
        }
        
        console.log("\n---- Titulo da tarefa e o seu responsavel");
        
        tarefas.forEach(tarefa => {
            console.log(`O responsavel da tarefa, ${tarefa.titulo} e o ${tarefa.nome}`);
        });

        console.log("\n---- TAREFA POR PESSOA ----");
        
        let responsavelTarefa = question("Digite o nome da pessoa que voce quer visualizar suas tarefas: ").trim().toLowerCase();
        
        const atividadesResponsavel = tarefas.filter(tarefa => {
            return tarefa.nome.toLowerCase() === responsavelTarefa;
        });

        // Correção 1: Verifica se o array contém elementos
        if (atividadesResponsavel.length > 0) {
            console.log(`\nTarefas encontradas para ${responsavelTarefa}:`);
            // Correção 2: Usa 'atividadesResponsavel' em vez de 'tarefas'
            atividadesResponsavel.forEach(tarefa => {
                console.log(`- Tarefa: ${tarefa.titulo}`);
            });
        } else {
            console.log("Nenhuma tarefa encontrada para esta pessoa.");
        }
        
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }
}