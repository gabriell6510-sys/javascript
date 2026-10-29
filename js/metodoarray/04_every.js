// Exemplo 1 - Verificar todos os produtos tem estoque

// const produtos = [
//     { nome: "Mouse", estoque: 10 },
//     { nome: "Teclado", estoque: 5 },
//     { nome: "Monitor", estoque: 3 },
// ];

// const todosDisponiveis = produtos.every(produto => {
//     return produto.estoque > 0;
// });

// console.log("Todos disponivies", todosDisponiveis);


const usuarios = [
    { nome: "Ana", email: "ana@gmail.com" },
    { nome: "Carlos", email: "carlos@gmail.com" },
    { nome: "Marina", email: "" },
]

const todosEmails = usuarios.every(usuario => {
    return usuario.email.trim() !== ""; 
})

console.log("Todos disponiveis", todosEmails);
