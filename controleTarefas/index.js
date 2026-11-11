import { cadastrarTarefa, listarTarefas, buscarTarefaPorId, atualizarStatus, listarTarefasPorStatus , tarefas } from "./tarefas.js";
import { relatorioGeral, relatorioPrioridade, relatorioResponsaveis } from "./relatorios.js";
import {questionInt} from "readline-sync"
while (true) {
    console.log("1 - Cadastrar tarefa");
    console.log("2 - Listar todas as tarefas");
    console.log("3 - Buscar tarefas por ID");
    console.log("4 - Atualizar status de tarefa");
    console.log("5 - Listar tarefas por status");
    console.log("6 - Relatorio geral");
    console.log("7 - Relatorio por prioridade");
    console.log("8 - Relatorio de responsaveis");
    console.log("0 - Sair");
    
    let opcao = questionInt("Digite uma das opcoes acima: ");
    
    if (opcao === 0) {
        console.log("Sair do sistema...");
        break;
    }

    switch(opcao) {
            case 1:
                cadastrarTarefa();
                break;

            case 2:
                listarTarefas();
                break;

            case 3:
                buscarTarefaPorId(tarefas);
                break;

            case 4:
                atualizarStatus(tarefas);
                break;

            case 5:
                listarTarefasPorStatus(tarefas);
                break;

            case 6:
                relatorioGeral(tarefas);
                break;
                
            case 7:
                relatorioPrioridade(tarefas);
                break;

            case 8:
                relatorioResponsaveis(tarefas);
                break;
                
            default:
                console.log("Informacao invalida! Digite novamente");
                break;
    }
}