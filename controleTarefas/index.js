import { cadastrarTarefa, listarTarefas, buscarTarefaPorId, tarefas } from "./tarefas.js";
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

            case 5:
            
            case 6:

            case 7:

            case 8:

            default:
                console.log("Informacao invalida! Digite novamente");
                break;
    }
}