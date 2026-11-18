const buscarUsuario = async () => { 

    try { 
        const response = await fetch("https://dummyjson.com/users/1")
        // TODO: realizar a requisição 

        if (!response.ok) {
            throw new Error("Erro HTTP:" + response.status);
        }

        // TODO: converter a resposta em JSON 
        const usuario = await response.json();

        // TODO: exibir os dados do usuário 
        console.log(usuario.firstName);
        console.log(usuario.age);
        console.log(usuario.email);
            
    } catch (erro) { 
        // TODO: tratar o erro 
        console.log("Erro:" + erro.message);
        
    } 

}; 

// TODO: chamar a função
buscarUsuario()