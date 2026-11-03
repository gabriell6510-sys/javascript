function cadastrarUsuario(nome,idade) {
    try {
        if (nome.trim() === "") {
            throw new Error("O nome nao pode ficar vazio");
        }

        if (idade < 0) {
            throw new Error("Idade invalida");
        }

        if (idade < 18) {
            throw new Error("Usuario precisa ser maior de idade!");
        }

        console.log("Usuario cadastrado com sucesso");
        
    } catch(erro) {
        console.log("Erro: " + erro.message);
    }

    console.log("Programa finalizado");
    
}

cadastrarUsuario("Carlos", 20);
cadastrarUsuario("", 30);
cadastrarUsuario("Ana", 16);
cadastrarUsuario("Luiz", -5);