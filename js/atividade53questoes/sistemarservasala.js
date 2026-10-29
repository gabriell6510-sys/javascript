const readline = require("readline-sync");

let salas = ["Sala A", "Sala B", "Sala C", "Sala D"];
let reservas = [false, true, false, false];

// Requisito: Listar as salas com seus respectivos estados
function consultarSalas() {
    console.log("\n--- Status de Todas as Salas ---");
    for (let i = 0; i < salas.length; i++) {
        let status = reservas[i] ? "Reservada" : "Disponível";
        console.log(`${i + 1}. ${salas[i]} - ${status}`);
    }
}

// Requisito: Permitir reservar apenas salas disponíveis e validar a posição
function reservarSala() {
    consultarSalas();
    let escolhaSala = readline.questionInt("Digite o numero da sala que deseja reservar: ") - 1;

    // Validar a posição escolhida pelo usuário
    if (escolhaSala >= 0 && escolhaSala < salas.length) {
        if (!reservas[escolhaSala]) {
            reservas[escolhaSala] = true;
            console.log(`A ${salas[escolhaSala]} foi reservada com sucesso!`);
        } else {
            console.log(`A ${salas[escolhaSala]} já está reservada.`);
        }
    } else {
        console.log("Erro: Número de sala inválido!");
    }
}

// Requisito: Permitir cancelar apenas reservas existentes e validar a posição
function cancelarReserva() {
    consultarSalas();
    let escolhaSala = readline.questionInt("Digite o numero da sala que deseja cancelar a reserva: ") - 1;

    // Validar a posição escolhida pelo usuário
    if (escolhaSala >= 0 && escolhaSala < salas.length) {
        if (reservas[escolhaSala]) {
            reservas[escolhaSala] = false;
            console.log(`A reserva da ${salas[escolhaSala]} foi cancelada com sucesso!`);
        } else {
            console.log(`A ${salas[escolhaSala]} não está reservada.`);
        }
    } else {
        console.log("Erro: Número de sala inválido!");
    }
}

// Requisito: Contar e apresentar as salas disponíveis
function consultarSalasDisponiveis() {
    console.log("\n--- Salas Disponíveis ---");
    let contador = 0;
    for (let i = 0; i < salas.length; i++) {
        if (!reservas[i]) {
            console.log(salas[i]);
            contador++;
        }
    }
    console.log(`Total de salas disponíveis: ${contador}`);
}

// Requisito: Manter o menu ativo até a escolha de encerramento
while (true) {
    console.log("\n=== SISTEMA DE RESERVA DE SALAS ===");
    console.log("1. Consultar salas.");
    console.log("2. Reservar uma sala.");
    console.log("3. Cancelar uma reserva.");
    console.log("4. Consultar quantidade de salas disponíveis.");
    console.log("5. Encerrar o sistema.");

    let escolha = readline.questionInt("Escolha uma opcao: ");

    if (escolha === 5) {
        console.log("Encerrando o sistema...");
        break;
    }

    switch (escolha) {
        case 1:
            consultarSalas();
            break;

        case 2:
            reservarSala();
            break;

        case 3:
            cancelarReserva();
            break;

        case 4:
            consultarSalasDisponiveis();
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}