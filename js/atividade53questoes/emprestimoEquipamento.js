// const readline = require("readline-sync");

// let nomes = ["Multímetro Digital", "Osciloscópio", "Gerador de Sinais"];
// let identificacoes = ["EQ001", "EQ002", "EQ003"];
// let emprestados = [false, false, true]; // true = emprestado, false = disponível

// let sistemaAtivo = true;

// while (sistemaAtivo) {
//     console.log("\n=== SISTEMA DE EMPRÉSTIMO (Arrays Paralelos) ===");
//     console.log("1. Cadastrar equipamentos.");
//     console.log("2. Listar todos os equipamentos.");
//     console.log("3. Pesquisar um equipamento pela identificação.");
//     console.log("4. Registrar um empréstimo.");
//     console.log("5. Registrar uma devolução.");
//     console.log("6. Apresentar a quantidade de equipamentos disponíveis.");
//     console.log("7. Encerrar o programa.");

//     let escolha = readline.questionInt("Escolha uma opcao: ");

//     switch (escolha) {
//         case 1:
//             let nome = readline.question("Digite o nome do equipamento: ");
//             let id = readline.question("Digite a identificacao (ex: EQ004): ");
            
//             let idExiste = false;
//             for (let i = 0; i < identificacoes.length; i++) {
//                 if (identificacoes[i].toLowerCase() === id.toLowerCase()) {
//                     idExiste = true;
//                     break;
//                 }
//             }

//             if (nome.trim() !== "" && id.trim() !== "") {
//                 if (!idExiste) {
//                     nomes.push(nome);
//                     identificacoes.push(id);
//                     emprestados.push(false);
//                     console.log("Equipamento cadastrado com sucesso!");
//                 } else {
//                     console.log("Erro: Já existe um equipamento com essa identificação.");
//                 }
//             } else {
//                 console.log("Erro: Nome e identificação não podem ser vazios.");
//             }
//             break;

//         case 2:
//             console.log("\n--- Lista de Equipamentos ---");
//             if (nomes.length === 0) {
//                 console.log("Nenhum equipamento cadastrado.");
//             } else {
//                 for (let i = 0; i < nomes.length; i++) {
//                     let situacao = emprestados[i] ? "Emprestado" : "Disponível";
//                     console.log(`${i + 1}. [ID: ${identificacoes[i]}] ${nomes[i]} - Status: ${situacao}`);
//                 }
//             }
//             break;

//         case 3:
//             let pesquisaId = readline.question("Digite a identificacao do equipamento: ");
//             let encontrado = false;
//             for (let i = 0; i < identificacoes.length; i++) {
//                 if (identificacoes[i].toLowerCase() === pesquisaId.toLowerCase()) {
//                     let situacao = emprestados[i] ? "Emprestado" : "Disponível";
//                     console.log(`\nEquipamento encontrado:`);
//                     console.log(`Nome: ${nomes[i]} | ID: ${identificacoes[i]} | Status: ${situacao}`);
//                     encontrado = true;
//                     break;
//                 }
//             }
//             if (!encontrado) {
//                 console.log("Erro: Identificação não encontrada.");
//             }
//             break;

//         case 4:
//             let idEmprestimo = readline.question("Digite a identificacao para empréstimo: ");
//             let idxEmp = -1;
//             for (let i = 0; i < identificacoes.length; i++) {
//                 if (identificacoes[i].toLowerCase() === idEmprestimo.toLowerCase()) {
//                     idxEmp = i;
//                     break;
//                 }
//             }

//             if (idxEmp !== -1) {
//                 if (!emprestados[idxEmp]) {
//                     emprestados[idxEmp] = true;
//                     console.log(`Empréstimo de "${nomes[idxEmp]}" realizado com sucesso!`);
//                 } else {
//                     console.log("Erro: O equipamento já está emprestado.");
//                 }
//             } else {
//                 console.log("Erro: Identificação não encontrada.");
//             }
//             break;

//         case 5:
//             let idDevolucao = readline.question("Digite a identificacao para devolução: ");
//             let idxDev = -1;
//             for (let i = 0; i < identificacoes.length; i++) {
//                 if (identificacoes[i].toLowerCase() === idDevolucao.toLowerCase()) {
//                     idxDev = i;
//                     break;
//                 }
//             }

//             if (idxDev !== -1) {
//                 if (emprestados[idxDev]) {
//                     emprestados[idxDev] = false;
//                     console.log(`Devolução de "${nomes[idxDev]}" registrada com sucesso!`);
//                 } else {
//                     console.log("Erro: O equipamento já está disponível.");
//                 }
//             } else {
//                 console.log("Erro: Identificação não encontrada.");
//             }
//             break;

//         case 6:
//             let qtdDisponiveis = 0;
//             for (let i = 0; i < emprestados.length; i++) {
//                 if (!emprestados[i]) {
//                     qtdDisponiveis++;
//                 }
//             }
//             console.log(`\nQuantidade de equipamentos disponíveis: ${qtdDisponiveis}`);
//             break;

//         case 7:
//             console.log("Encerrando o programa...");
//             sistemaAtivo = false;
//             break;

//         default:
//             console.log("Opção inválida. Tente novamente.");
//     }
// }


// const readline = require("readline-sync");

// let equipamentos = [
//     { nome: "Multímetro Digital", identificacao: "EQ001", emprestado: false },
//     { nome: "Osciloscópio", identificacao: "EQ002", emprestado: false },
//     { nome: "Gerador de Sinais", identificacao: "EQ003", emprestado: true }
// ];

// let sistemaAtivo = true;

// while (sistemaAtivo) {
//     console.log("\n=== SISTEMA DE EMPRÉSTIMO (Objetos Simples) ===");
//     console.log("1. Cadastrar equipamentos.");
//     console.log("2. Listar todos os equipamentos.");
//     console.log("3. Pesquisar um equipamento pela identificação.");
//     console.log("4. Registrar um empréstimo.");
//     console.log("5. Registrar uma devolução.");
//     console.log("6. Apresentar a quantidade de equipamentos disponíveis.");
//     console.log("7. Encerrar o programa.");

//     let escolha = readline.questionInt("Escolha uma opcao: ");

//     switch (escolha) {
//         case 1:
//             let nome = readline.question("Digite o nome do equipamento: ");
//             let id = readline.question("Digite a identificacao (ex: EQ004): ");

//             let idExiste = false;
//             for (let i = 0; i < equipamentos.length; i++) {
//                 if (equipamentos[i].identificacao.toLowerCase() === id.toLowerCase()) {
//                     idExiste = true;
//                     break;
//                 }
//             }

//             if (nome.trim() !== "" && id.trim() !== "") {
//                 if (!idExiste) {
//                     equipamentos.push({
//                         nome: nome,
//                         identificacao: id,
//                         emprestado: false
//                     });
//                     console.log("Equipamento cadastrado com sucesso!");
//                 } else {
//                     console.log("Erro: Já existe um equipamento com essa identificação.");
//                 }
//             } else {
//                 console.log("Erro: Nome e identificação não podem ser vazios.");
//             }
//             break;

//         case 2:
//             console.log("\n--- Lista de Equipamentos ---");
//             if (equipamentos.length === 0) {
//                 console.log("Nenhum equipamento cadastrado.");
//             } else {
//                 for (let i = 0; i < equipamentos.length; i++) {
//                     let eq = equipamentos[i];
//                     let situacao = eq.emprestado ? "Emprestado" : "Disponível";
//                     console.log(`${i + 1}. [ID: ${eq.identificacao}] ${eq.nome} - Status: ${situacao}`);
//                 }
//             }
//             break;

//         case 3:
//             let pesquisaId = readline.question("Digite a identificacao do equipamento: ");
//             let encontrado = null;
//             for (let i = 0; i < equipamentos.length; i++) {
//                 if (equipamentos[i].identificacao.toLowerCase() === pesquisaId.toLowerCase()) {
//                     encontrado = equipamentos[i];
//                     break;
//                 }
//             }

//             if (encontrado) {
//                 let situacao = encontrado.emprestado ? "Emprestado" : "Disponível";
//                 console.log(`\nEquipamento encontrado:`);
//                 console.log(`Nome: ${encontrado.nome} | ID: ${encontrado.identificacao} | Status: ${situacao}`);
//             } else {
//                 console.log("Erro: Identificação não encontrada.");
//             }
//             break;

//         case 4:
//             let idEmprestimo = readline.question("Digite a identificacao para empréstimo: ");
//             let eqEmp = null;
//             for (let i = 0; i < equipamentos.length; i++) {
//                 if (equipamentos[i].identificacao.toLowerCase() === idEmprestimo.toLowerCase()) {
//                     eqEmp = equipamentos[i];
//                     break;
//                 }
//             }

//             if (eqEmp) {
//                 if (!eqEmp.emprestado) {
//                     eqEmp.emprestado = true;
//                     console.log(`Empréstimo de "${eqEmp.nome}" realizado com sucesso!`);
//                 } else {
//                     console.log("Erro: O equipamento já está emprestado.");
//                 }
//             } else {
//                 console.log("Erro: Identificação não encontrada.");
//             }
//             break;

//         case 5:
//             let idDevolucao = readline.question("Digite a identificacao para devolução: ");
//             let eqDev = null;
//             for (let i = 0; i < equipamentos.length; i++) {
//                 if (equipamentos[i].identificacao.toLowerCase() === idDevolucao.toLowerCase()) {
//                     eqDev = equipamentos[i];
//                     break;
//                 }
//             }

//             if (eqDev) {
//                 if (eqDev.emprestado) {
//                     eqDev.emprestado = false;
//                     console.log(`Devolução de "${eqDev.nome}" registrada com sucesso!`);
//                 } else {
//                     console.log("Erro: O equipamento já está disponível.");
//                 }
//             } else {
//                 console.log("Erro: Identificação não encontrada.");
//             }
//             break;

//         case 6:
//             let qtdDisponiveis = 0;
//             for (let i = 0; i < equipamentos.length; i++) {
//                 if (!equipamentos[i].emprestado) {
//                     qtdDisponiveis++;
//                 }
//             }
//             console.log(`\nQuantidade de equipamentos disponíveis: ${qtdDisponiveis}`);
//             break;

//         case 7:
//             console.log("Encerrando o programa...");
//             sistemaAtivo = false;
//             break;

//         default:
//             console.log("Opção inválida. Tente novamente.");
//     }
// }