let idade = -5;

try {
    if (idade <= 0) {
        throw new Error("Idade invalida");
    }

    console.log("Cadastro realizado!");
    
} catch (erro) {
    console.log("Erro: " + erro.message);
    
}

console.log("Programa finalizado!");
