const { question } = require("readline-sync");

const tarefas = [
    {
    titulo: "Criar tela de login",
    responsavel: "Ana",
    prioridade: 1,
    concluida: true,
    horas: 4
    },

    {
    titulo: "Criar banco de dados",
    responsavel: "Carlos",
    prioridade: 1,
    concluida: true,
    horas: 6
    },

    {
    titulo: "Implementar cadastro",
    responsavel: "Ana",
    prioridade: 2,
    concluida: false,
    horas: 8
    },

    {
    titulo: "Realizar testes",
    responsavel: "Marina",
    prioridade: 1,
    concluida: false,
    horas: 5
    },

    {
    titulo: "Escrever documentação",
    responsavel: "Carlos",
    prioridade: 3,
    concluida: false,
    horas: 3
    }
];

// Desenvolvimento Solicitado:
// 1. FIND: encontra uma tarefa pelo título
// 2. FILTER: seleciona somente as tarefas pendentes
// 3. SOME: verifica se ainda existe alguma pendência
// 4. EVERY: verifica se todas as tarefas foram concluídas
// 5. MAP: cria uma lista resumida para um painel
// 6. REDUCE: calcula quantas horas foram previstas no projeto
// • Calcular quantas horas correspondem às tarefas concluídas
// • Calcular o percentual de tarefas concluídas
// 7. SORT: ordena as tarefas por prioridade
// 8. FOREACH: gera um relatório completo das tarefas



while (true) {
    console.log("1 - FIND: Encontrar titulo");
    console.log("2 - FILTER: Seleciona tarefa pendente");
    console.log("3 - SOME: verifica se ainda existe alguma pendência");
    console.log("4 - EVERY: verifica se todas as tarefas foram concluídas");
    console.log("5 - MAP: cria uma lista resumida para um painel");
    console.log("6 - REDUCE: calcula quantas horas foram previstas no projeto");
    console.log("7 - SORT: ordena as tarefas por prioridade");
    console.log("8 - FOREACH: gera um relatório completo das tarefas");
    console.log("9 - Sair do sistema");
    let opcao = Number(question("Escolha uma opcao acima: "));

    if (opcao === 9) {
        console.log("Fim do sistema");
        break;
    }

    switch(opcao) {
        case 1:
            let escolhaTarefa = question("Escolha qual tarefa voce quer fazer: ").trim();
            const encontrarTarefa = tarefas.find(tarefa => {
               return  tarefa.titulo.toLowerCase() === escolhaTarefa.toLowerCase();
        });

        if (encontrarTarefa) {
            console.log(`Nome da tarefa: ${encontrarTarefa.titulo}`);
        } else {
            console.log("Tarefa nao encontrada");
            
        }
        break;

        case 2:
            const tarefaPendente = tarefas.filter(tarefa => {
                return tarefa.concluida === false;
            });

            if (tarefaPendente) {
                tarefaPendente.forEach(tarefa => {
                console.log(`Nome da tarefa pendente: ${tarefa.titulo}`);
            })
            } else {
                console.log("Nao tem nenhuma tarefa pendente");
            }
            break;

        case 3:
            const existeTarefaPendente = tarefas.some(tarefa => {
                return tarefa.concluida === false;
            })

            if (existeTarefaPendente) {
                console.log(`Existe tarefa pendente`);
            }
            else {
               console.log(`Nao existe tarefa pendente`); 
            }
            break;

        case 4:
            const todaTarefaConcluida = tarefas.every(tarefa => {
                return tarefa.concluida === true;
            })

            if (todaTarefaConcluida) {
                console.log(`Todas as tarefas foram concluidas`);
            } else {
                console.log(`Existe tarefa que nao foi concluida`);
                
            }
            break;
        case 5:
            const criaListaResumida = tarefas.map(tarefa => {
                return {
                    nome: tarefa.titulo,
                    responsavel: tarefa.responsavel,
                    prioridade: tarefa.prioridade,
                    horas: tarefa.horas
                }
            })

            if (criaListaResumida) {
                criaListaResumida.forEach(tarefa => {
                    console.log(`A tarefa: ${tarefa.titulo} foi dirigida ao responsavel ${tarefa.responsavel}, e com sua prioridade ${tarefa.prioridade} com o tempo de termino de tarefa de ${tarefa.horas} horas`);
                });
            } else {
                console.log("Todas as tarefas foram concluidas por todos membros da equipe");
            }
            break;
        case 6:
            const totalTarefas = tarefas.length;
            const quantidadeTotalHoras = tarefas.reduce((acumulador, tarefa) => acumulador + tarefa.horas, 0);
            const horaTarefaConcluida = tarefas.filter(tarefa => {
                return tarefa.concluida === true;
            })
            const totalConcluidas = horaTarefaConcluida.length
            const percentualConcluidas = totalTarefas > 0 ? (totalConcluidas / totalTarefas) * 100 : 0;

            if (horaTarefaConcluida) {
                horaTarefaConcluida.forEach(tarefa => {
                    console.log(`As tarefas que foram concluidas ${tarefa.titulo} e a o tempo que demorou para concluilas foi ${tarefa.horas} horas`);
                })
               
                
            }
            tarefas.forEach(tarefa => {
                console.log(`Quantidade total de horas por atividade ${tarefa.titulo}: ${tarefa.horas} horas`);
            });

            console.log(`Quantidade total de paginas do catalago: ${quantidadeTotalHoras}`);
            console.log(`Percentual de tarefas concluídas: ${percentualConcluidas.toFixed(2)}%`);
            break;

        case 7:
            const horaPrioridade = tarefas.sort(tarefa => {
                return tarefa.prioridade;
            });
            horaPrioridade.forEach(tarefa => {
                if (tarefa.prioridade === 1) {
                    console.log(`A tarefa ${tarefa.titulo} tem Prioridade: baixa`);
                }

                if (tarefa.prioridade === 2) {
                console.log(`A tarefa ${tarefa.titulo} tem Prioridade: media`);
                }
                
                if (tarefa.prioridade === 3) {
                    console.log(`A tarefa ${tarefa.titulo} tem Prioridade: alta`);
                }
            });
            break;

        case 8:
            tarefas.forEach(tarefa => {
                console.log(`A tarefa: ${tarefa.titulo} foi dirigida ao responsavel ${tarefa.responsavel}, e com sua prioridade ${tarefa.prioridade} com o tempo de termino de tarefa de ${tarefa.horas} horas`);
            });
            break;

        default:
            console.log("Opcao invalida");
            break;
    }
}