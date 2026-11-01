const { question } = require("readline-sync");

const consultas = [
 {
 animal: "Thor",
 especie: "Cachorro",
 tutor: "Marcos",
 veterinario: "Dra. Ana",
 procedimento: "Consulta",
 valor: 120,
 realizada: true
 },
 {
 animal: "Luna",
 especie: "Gato",
 tutor: "Carla",
 veterinario: "Dr. Pedro",
 procedimento: "Vacina",
 valor: 90,
 realizada: true
 },
 {
 animal: "Bob",
 especie: "Cachorro",
 tutor: "Marcos",
 veterinario: "Dra. Ana",
 procedimento: "Exame",
 valor: 180,
 realizada: false
 },
 {
 animal: "Mel",
 especie: "Gato",
 tutor: "Juliana",
 veterinario: "Dr. Pedro",
 procedimento: "Consulta",
 valor: 120,
 realizada: false
 },
 {
 animal: "Max",
 especie: "Cachorro",
 tutor: "Roberto",
 veterinario: "Dra. Ana",
 procedimento: "Vacina",
 valor: 90,
 realizada: true
 }
];

// Desenvolvimento solicitado:
// 1. Encontrar uma consulta pelo nome do animal.
// 2. Filtrar todas as consultas de determinado veterinário.
// 3. Filtrar consultas ainda não realizadas.
// 4. Filtrar consultas de animais de uma determinada espécie.
// 5. Verificar se existem consultas pendentes.
// 6. Verificar se todas as consultas foram realizadas.
// 7. Utilizar map() para gerar uma relação contendo animal, tutor e procedimento.
// 8. Utilizar reduce() para calcular o valor total dos procedimentos cadastrados.
// 9. Utilizar reduce() para contar quantas consultas foram realizadas.
// 10. Utilizar sort() para ordenar consultas pelo nome do animal.
// 11. Gerar um relatório por veterinário utilizando forEach().
//  Desafio adicional:
// Criar uma função para localizar uma consulta e alterar seu estado para realizada.
// Criar também um relatório que mostre quantos atendimentos cada veterinário possui


while (true) {
    console.log("1 - FIND: Encontrar uma consulta pelo nome do animal.");
    console.log("2 - FILTER: Filtrar todas as consultas de determinado veterinário.");
    console.log("3 - FILTER: Filtrar consultas ainda não realizadas.");
    console.log("4 - FILTER: Filtrar consultas de animais de uma determinada espécie.");
    console.log("5 - FILTER: Verificar se existem consultas pendentes.");
    console.log("6 - MAP: gerar uma relação contendo animal, tutor e procedimento.");
    console.log("7 - REDUCE: para calcular o valor total dos procedimentos cadastrados.");
    console.log("8 - REDUCE: para contar quantas consultas foram realizadas.");
    console.log("9 - REDUCE: para contar quantas consultas foram realizadas.");
    console.log("10 - SORT: para ordenar consultas pelo nome do animal.");
    console.log("11 - Gerar um relatório por veterinário utilizando forEach().");
    console.log("11 - Sair do sistema");
    let opcao = Number(question("Digite uma das opcoes acima"));
    if (opcao === 12) {
        console.log("Fim do sistema");
    }

    switch(opcao) {
        case 1:
            let escolhaConsulta = question("Escolha qual nome do animal voce quer escolher: ").trim();
            const encontrarConsulta = consultas.find(consulta => {
                return  consulta.titulo.toLowerCase() === escolhaConsulta.toLowerCase();
            });

            if (encontrarConsulta) {
                encontrarConsulta.forEach(consulta => {
                    console.log(`A consulta do animal ${consulta.animal} e o valor da consulta e ${consulta.valor}`);
                })
            
        } else {
            console.log("Consulta nao encontrada");
            
        }
        break;

        case 2:
            const filtrarConsultaVeterinario = consultas.filter(consulta => {
                return consulta.realizada === true;
            });

            if (filtrarConsultaVeterinario) {
                filtrarConsultaVeterinario.forEach(consultas => {
                console.log(`Nome da tarefa pendente: ${consultas.titulo}`);
            })
            } else {
                console.log("Nao tem nenhuma tarefa pendente");
            }
            break;
    }
}
