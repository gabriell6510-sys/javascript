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

while (true) {
    console.log("\n================ CLINICA VETERINARIA ================");
    console.log("1 - FIND: Encontrar uma consulta pelo nome do animal.");
    console.log("2 - FILTER: Filtrar todas as consultas de determinado veterinário.");
    console.log("3 - FILTER: Filtrar consultas ainda não realizadas.");
    console.log("4 - FILTER: Filtrar consultas de animais de uma determinada espécie.");
    console.log("5 - SOME: Verificar se existem consultas pendentes.");
    console.log("6 - EVERY: Verificar se todas as consultas foram realizadas.");
    console.log("7 - MAP: Gerar relação contendo animal, tutor e procedimento.");
    console.log("8 - REDUCE: Calcular o valor total dos procedimentos cadastrados.");
    console.log("9 - REDUCE: Contar quantas consultas foram realizadas.");
    console.log("10 - SORT: Ordenar consultas pelo nome do animal.");
    console.log("11 - FOREACH: Gerar um relatório por veterinário.");
    console.log("12 - DESAFIO: Alterar estado de uma consulta para realizada.");
    console.log("13 - Sair do sistema");
    
    let opcao = Number(question("\nDigite uma das opcoes acima: "));
    
    if (opcao === 13) {
        console.log("Fim do sistema.");
        break;
    }

    switch(opcao) {
        case 1: {
            let escolhaAnimal = question("Digite o nome do animal que deseja procurar: ").trim();
            const encontrarConsulta = consultas.find(consulta => 
                consulta.animal.toLowerCase() === escolhaAnimal.toLowerCase()
            );

            if (encontrarConsulta) {
                console.log(`\nConsulta encontrada: Animal: ${encontrarConsulta.animal} | Tutor: ${encontrarConsulta.tutor} | Veterinário(a): ${encontrarConsulta.veterinario} | Procedimento: ${encontrarConsulta.procedimento} | Valor: R$ ${encontrarConsulta.valor} | Realizada: ${encontrarConsulta.realizada ? 'Sim' : 'Não'}`);
            } else {
                console.log("Consulta não encontrada.");
            }
            break;
        }

        case 2: {
            let escolhaVet = question("Digite o nome do veterinário(a) (ex: Dra. Ana, Dr. Pedro): ").trim();
            const filtrarConsultaVeterinario = consultas.filter(consulta => 
                consulta.veterinario.toLowerCase() === escolhaVet.toLowerCase()
            );

            if (filtrarConsultaVeterinario.length > 0) {
                filtrarConsultaVeterinario.forEach(consulta => {
                    console.log(`- Consulta do animal ${consulta.animal} (${consulta.especie}), tutor(a) ${consulta.tutor}. Procedimento: ${consulta.procedimento} | Valor: R$ ${consulta.valor}`);
                });
            } else {
                console.log("Nenhuma consulta encontrada para este veterinário.");
            }
            break;
        }

        case 3: {
            const filtrarConsultaNaoRealizadas = consultas.filter(consulta => consulta.realizada === false);

            if (filtrarConsultaNaoRealizadas.length > 0) {
                filtrarConsultaNaoRealizadas.forEach(consulta => {
                    console.log(`- Animal: ${consulta.animal} | Pendência: ${consulta.procedimento} | Responsável: ${consulta.veterinario}`);
                });
            } else {
                console.log("Não há nenhuma consulta pendente.");
            }
            break;
        }

        case 4: {
            let escolhaEspecie = question("Digite a espécie do animal (ex: Cachorro, Gato): ").trim();
            const filtrarConsultaAnimais = consultas.filter(consulta => 
                consulta.especie.toLowerCase() === escolhaEspecie.toLowerCase()
            );

            if (filtrarConsultaAnimais.length > 0) {
                filtrarConsultaAnimais.forEach(consulta => {
                    console.log(`- Animal: ${consulta.animal} (${consulta.especie}), tutor(a): ${consulta.tutor}, Veterinário(a): ${consulta.veterinario}`);
                });
            } else {
                console.log("Nenhuma consulta encontrada para esta espécie.");
            }
            break;
        }

        case 5: {
            // Utilizando .some() para verificar se existe pelo menos uma pendente
            const existemPendentes = consultas.some(consulta => consulta.realizada === false);
            if (existemPendentes) {
                console.log("Sim, existem consultas pendentes no sistema.");
            } else {
                console.log("Não há consultas pendentes, todas foram realizadas!");
            }
            break;
        }

        case 6: {
            // Utilizando .every() para verificar se todas foram realizadas
            const todasRealizadas = consultas.every(consulta => consulta.realizada === true);
            if (todasRealizadas) {
                console.log("Sim, todas as consultas foram realizadas.");
            } else {
                console.log("Não, ainda existem consultas pendentes.");
            }
            break;
        }

        case 7: {
            const gerarRelacaoAnimalTutorProcedimento = consultas.map(consulta => {
                return {
                    nomeAnimal: consulta.animal,
                    tutor: consulta.tutor,
                    procedimento: consulta.procedimento
                };
            });

            gerarRelacaoAnimalTutorProcedimento.forEach(item => {
                console.log(`- Animal: ${item.nomeAnimal} | Tutor(a): ${item.tutor} | Procedimento: ${item.procedimento}`);
            });
            break;
        }

        case 8: {
            const valorTotal = consultas.reduce((total, consulta) => total + consulta.valor, 0);
            console.log(`O valor total dos procedimentos cadastrados é: R$ ${valorTotal}`);
            break;
        }

        case 9: {
            const totalRealizadas = consultas.reduce((contador, consulta) => {
                return consulta.realizada ? contador + 1 : contador;
            }, 0);
            console.log(`Total de consultas já realizadas: ${totalRealizadas}`);
            break;
        }

        case 10: {
            // Criamos uma cópia com o spread operator [...] para não alterar o array original diretamente
            const consultasOrdenadas = [...consultas].sort((a, b) => a.animal.localeCompare(b.animal));
            console.log("Consultas ordenadas pelo nome do animal:");
            consultasOrdenadas.forEach(consulta => {
                console.log(`- ${consulta.animal} (${consulta.especie}) - Tutor: ${consulta.tutor}`);
            });
            break;
        }

        case 11: {
            console.log("\n--- Relatório por Veterinário ---");
            const veterinarios = [...new Set(consultas.map(c => c.veterinario))];
            
            veterinarios.forEach(vet => {
                console.log(`\nVeterinário(a): ${vet}`);
                let atendimentosVet = consultas.filter(c => c.veterinario === vet);
                atendimentosVet.forEach(c => {
                    console.log(`   -> Animal: ${c.animal} | Procedimento: ${c.procedimento} | Realizada: ${c.realizada ? 'Sim' : 'Não'}`);
                });
                console.log(`   Total de atendimentos: ${atendimentosVet.length}`);
            });
            break;
        }

        case 12: {
            // Desafio Adicional
            let nomeBusca = question("Digite o nome do animal cuja consulta deseja marcar como realizada: ").trim();
            let consultaEncontrada = consultas.find(c => c.animal.toLowerCase() === nomeBusca.toLowerCase());

            if (consultaEncontrada) {
                if (consultaEncontrada.realizada) {
                    console.log(`A consulta do animal ${consultaEncontrada.animal} já estava marcada como realizada.`);
                } else {
                    consultaEncontrada.realizada = true;
                    console.log(`Sucesso! A consulta do animal ${consultaEncontrada.animal} foi alterada para REALIZADA.`);
                }
            } else {
                console.log("Animal não encontrado.");
            }
            break;
        }

        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }
}