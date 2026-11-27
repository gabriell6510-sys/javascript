// console.log("1 - Início");

// setTimeout(() => {
//     console.log("2 - Operacao concluida");
// }, 3000); //A função do seTimout() é demorar 3 milissegundos para ser executado, enquanto isso o código segue sem parar

// console.log("3 - Finalizacao");

// function executarTarefa(callback) {
//     console.log("Executando tarefa...");
//     callback();
    
// }

// function finalizar() {
//     console.log("Tarefa finalizada!");
// }

// executarTarefa(finalizar)


function salvarUsuario(nome, callback) {
    console.log(`Salvando usuario ${nome} ...`);

    setTimeout(() => {
        console.log("Usuario salvo com sucesso!");
        callback();
        
    }, 2000);
    
    // Simulando um processamento
}

function exibirMensagem() {
    console.log("Redirecionando para a tela principal...");
}

salvarUsuario("Maria", exibirMensagem);

