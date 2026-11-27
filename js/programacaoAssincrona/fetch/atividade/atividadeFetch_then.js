console.log("Iniciando consulta...");

fetch("https://dummyjson.com/users/1")

    .then(response => {
        if (!response.ok) {
            response.json()
                .then((data) => console.log(data));
        }
        return response.json()


        // TODO: converter a resposta em JSON 

    })

    .then(usuario => {
        usuario => usuario.json()
        console.log(usuario.firstName);
        console.log(usuario.age);
        console.log(usuario.email);


        // TODO: exibir nome, idade e email 

    })

    .catch(erro => {
        console.log("Erro:" + erro.message);


        // TODO: exibir mensagem de erro 

    });

console.log("Requisição enviada!"); 


