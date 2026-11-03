// try(se acontecer algum erro ele para e vai pro catch)

// Exemplo com tratamento de erro
console.log("Inciando programa");

try {
    let resultado = 10 / 0;

    console.log(resultado);

    // Provocando um erro proposital
    console.log(nomeUsuario);
    
} catch (erro) {
    console.log("Ocorreu um erro !");
    console.log(erro.message);
}
console.log("Programa finalizado");

