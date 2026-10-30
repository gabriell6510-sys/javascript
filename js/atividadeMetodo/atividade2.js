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

