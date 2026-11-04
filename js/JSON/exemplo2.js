const produto = {
    nome: "Notebook",
    preco: 3500,
    disponivel: true
};

console.log("Objeto original:");
console.log(produto);

console.log(typeof produto);

//Serialização
const produtoTexto = JSON.stringify(produto);


// Resultado da serialização
console.log("Objeto convertido:");
console.log(produtoTexto);
