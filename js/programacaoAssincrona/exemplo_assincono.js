function baixarArquivo(callback) {
    let progresso = 0;
    console.log("Iniciando Dowload...");

    const intervalo = setInterval(() => {
        progresso += 20;
        console.log(`Dowload: ${progresso}%`);

        if (progresso === 100) {
            clearInterval(intervalo)
            setTimeout(() => {
                console.log("Arquivo baixado com sucesso!");
                callback();
            }, 2000);
        }
    }, 1000);
}

function mensagem() {
    console.log("Abrindo arquivo....");
}

baixarArquivo(mensagem);