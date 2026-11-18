//https://jsonplaceholder.tryicode.com/users

const carregarUsuarios = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Erro HTTP:" + response.status);
        }

        const usuario = await response.json();

        usuario.forEach(usuario => {
            console.log(usuario.name);
            console.log(usuario.email);
            
        });

    } catch(erro) {

    }
}
carregarUsuarios()