console.log("1 - Programa iniciado"); 

const buscarDados = async () => { 

    console.log("2 - Consultando API"); 

    const response = await fetch("https://dummyjson.com/users/1"); 

    const usuario = await response.json(); 

    console.log("4 - Usuário:", usuario.firstName); 

}; 

buscarDados(); 

console.log("3 - Continuando o programa"); 

 

// Responda: 

// Qual será a ordem das mensagens exibidas no console? 
// 1) Programa iniciado
// 2) Consultando API
// 3) Continuando o programa
// 4) Usuario

// Por que a mensagem 3 aparece antes da mensagem 4?
// Porque o sistema  vai na constante buscarDados passa por todo o processo, equanto isso ele "pula" para(3 - Continuando o programa)) 

// Qual é a finalidade do await? 
// Espera algum dado que a promose promete

// Qual a diferença entre utilizar .then() e async/await? 
// Usa o conceito de callbacks encadeados. Se precisares de fazer vários pedidos dependentes uns dos outros, o código começa a esticar para o lado (muitas vezes chamado de callback hell), o que pode dificultar a leitura.

// O que aconteceria se retirássemos o await de response.json()? 
// variavel usuario deixaria de ser os dados reais do utilizador e passaria a armazenar a promise