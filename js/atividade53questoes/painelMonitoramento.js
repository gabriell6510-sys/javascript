const readline = require("readline-sync");

// Dados iniciais fornecidos na atividade
let salas = ["Laboratório 1", "Laboratório 2", "Laboratório 3"];
let temperaturas = [23.5, 29.8, 26.2];

let sistemaAtivo = true;

while (sistemaAtivo) {
    console.log("\n=== PAINEL DE MONITORAMENTO DE AMBIENTE ===");
    console.log("1. Apresentar as temperaturas de todas as salas.");
    console.log("2. Registrar uma nova temperatura para uma sala.");
    console.log("3. Identificar a sala com a maior temperatura.");
    console.log("4. Calcular a temperatura média das salas.");
    console.log("5. Contar quantas salas estão com temperatura acima de 27 °C.");
    console.log("6. Informar se alguma sala ultrapassou 30 °C.");
    console.log("7. Encerrar o sistema.");

    let escolha = readline.questionInt("Escolha uma opcao: ");

    switch (escolha) {
        case 1:
            // 1. Apresente as temperaturas de todas as salas[cite: 5]
            console.log("\n--- Temperaturas Atuais ---");
            for (let i = 0; i < salas.length; i++) {
                console.log(`${i + 1}. ${salas[i]}: ${temperaturas[i]} °C`);
            }
            break;

        case 2:
            // 2. Permita registrar uma nova temperatura para uma sala[cite: 5]
            console.log("\n--- Selecione a Sala ---");
            for (let i = 0; i < salas.length; i++) {
                console.log(`${i + 1}. ${salas[i]} (${temperaturas[i]} °C)`);
            }
            
            let indiceSala = readline.questionInt("Digite o numero da sala que deseja atualizar: ") - 1;

            // Validação do índice informado
            if (indiceSala >= 0 && indiceSala < salas.length) {
                let novaTemperatura = readline.questionFloat(`Digite a nova temperatura para ${salas[indiceSala]} (em °C): `);
                temperaturas[indiceSala] = novaTemperatura;
                console.log("Temperatura registrada com sucesso!");
            } else {
                console.log("Erro: Número de sala inválido!");
            }
            break;

        case 3:
            // 3. Identifique a sala com a maior temperatura (por meio de repetição)[cite: 5]
            if (salas.length > 0) {
                let indiceMaior = 0;
                let maiorTemp = temperaturas[0];

                for (let i = 1; i < temperaturas.length; i++) {
                    if (temperaturas[i] > maiorTemp) {
                        maiorTemp = temperaturas[i];
                        indiceMaior = i;
                    }
                }
                console.log(`\nSala com a maior temperatura: ${salas[indiceMaior]} (${maiorTemp} °C).`);
            }
            break;

        case 4:
            // 4. Calcule a temperatura média das salas (a partir dos valores atuais)[cite: 5]
            let soma = 0;
            for (let i = 0; i < temperaturas.length; i++) {
                soma += temperaturas[i];
            }
            let media = soma / temperaturas.length;
            console.log(`\nTemperatura média das salas: ${media.toFixed(2)} °C`);
            break;

        case 5:
            // 5. Conte quantas salas estão com temperatura acima de 27 °C[cite: 5]
            let contadorAcima27 = 0;
            for (let i = 0; i < temperaturas.length; i++) {
                if (temperaturas[i] > 27) {
                    contadorAcima27++;
                }
            }
            console.log(`\nQuantidade de salas com temperatura acima de 27 °C: ${contadorAcima27}`);
            break;

        case 6:
            // 6. Informe se alguma sala ultrapassou 30 °C[cite: 5]
            let ultrapassou = false;
            console.log("\n--- Verificação de Limite (30 °C) ---");
            for (let i = 0; i < temperaturas.length; i++) {
                if (temperaturas[i] > 30) {
                    console.log(`Alerta: O ${salas[i]} ultrapassou 30 °C (${temperaturas[i]} °C)!`);
                    ultrapassou = true;
                }
            }
            if (!ultrapassou) {
                console.log("Nenhuma sala ultrapassou 30 °C.");
            }
            break;

        case 7:
            // 7. Encerre quando o usuário solicitar[cite: 5]
            console.log("Encerrando o sistema de monitoramento...");
            sistemaAtivo = false;
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}