let dispositivo = {
 nome: "Impressora",
 fabricante: "Epson",
 funcionando: true
};
if (dispositivo.funcionamento === true) {
 console.log("Equipamento funcionando");
} else {
 console.log("Verificar equipamento");
}
// Enunciado: o programa deveria consultar a situação do equipamento, mas acessa uma 
// propriedade incorreta.
// dispositivo foi criado com as propriedades nome, fabricante e funcionando. No entanto, a estrutura condicional tenta aceder a uma propriedade incorreta ou inexistente (como status), que não faz parte do objeto.
// Identifique o erro, corrija o código e explique como a linguagem se comporta quando 
// tentamos acessar uma propriedade que não existe no objeto.
// Quando tentamos aceder a uma propriedade que não existe em um objeto, o JavaScript não gera um erro fatal de interrupção. Em vez disso, a linguagem retorna o valor especial undefined
// let dispositivo = {
//     nome: "Impressora",
//     fabricante: "Epson",
//     funcionando: true
// };

// // Correção: acessar a propriedade correta definida no objeto
// if (dispositivo.funcionando === true) {
//     console.log("Equipamento funcionando");
// } else {
//     console.log("Verificar equipamento");
// }