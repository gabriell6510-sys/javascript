let idade = 17;
let possuiAutorizacao = false;
if (idade >= 18 && possuiAutorizacao === false) {
 console.log("Acesso liberado");
} else {
 console.log("Acesso negado");
}
// Enunciado: uma aplicação de demonstração deve liberar o acesso somente para usuários com 
// 18 anos ou mais. Entretanto, o programa precisa apresentar mensagens coerentes para cada 
// situação.
// somente para usuários com 18 anos ou mais. A lógica anterior continha checagens confusas (possuiAutorizacao === false) que misturavam regras desnecessárias e não tratavam a mensagem de forma coerente para menores de idade.
// autorização não deve alterar o requisito mínimo de idade porque a restrição de 18 anos ou mais representa um limite legal ou um requisito de segurança obrigatório do sistema.
// Corrija a lógica para atender à regra estabelecida e explique por que a autorização não deve 
// alterar o requisito mínimo de idade neste cenário.
// let idade = 17;
// let possuiAutorizacao = false;

// // A regra principal exige estritamente 18 anos ou mais
// if (idade >= 18) {
//     console.log("Acesso liberado");
// } else {
//     console.log("Acesso negado: é necessário ter 18 anos ou mais.");
// }