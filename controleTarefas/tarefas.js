import { perguntarTexto, perguntarNumero } from "./entrada.js";
import { question, questionInt } from "readline-sync";

const tarefas = [];

export function cadastrarTarefa() {
    try {
        console.log("\n===== CADASTRO DE TAREFA =====");
        let id;
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

export function buscarTarefaPorId(id) {
    try {
        console.log("===== BUSCANDO TAREFA PELO ID =====");

        let escolhaTarefa = questionInt("Qual tarefa voce quer escolher: ");

        if (escolhaTarefa === "") {
            throw new Error("O id nao pode ser vazio");
        }

        let buscandoTarefa = tarefas.find(tarefa => {
            return escolhaTarefa === tarefa.id;
        })

        if (buscandoTarefa) {
                console.log("\nTarefa: ", buscandoTarefa.tarefa);
        } 
        
    } catch(erro) {
        console.log("Erro: ", erro.message);
        
    }
    
        
    
    
}