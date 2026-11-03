let idade = 15;

try {
    if (idade < 0) {
        throw new Error("A idade não pode ser negativa!"); // throw(gera uma mensagem de erro que vai pro catch)
    }

    if (idade < 18) {
        throw new Error("Acesso permitido somente para maiores de idade!");
    }

    console.log("Acesso autorizado");
    
} catch(erro) {
    console.log("Nao foi possivel continuar");
    console.log("Motivo: " + erro.message);
}
