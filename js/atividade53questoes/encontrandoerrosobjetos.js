let jogo = {
 nome: "Hollow Knight",
 genero: "Aventura",
 ano: 2017
};
console.log(jogo.titulo);
jogo.genero = "Ação e aventura";
jogo.anoLancamento = 2020;
console.log(jogo);

// a) Por que jogo.titulo apresenta undefined?
// Porque o objeto jogo não tem propriedade titulo
// b) Como acessar corretamente o nome do jogo?
//jogo.nome
// c) A atribuição a jogo.anoLancamento provoca um erro? Explique.
// Não, porque estamos adicionando uma nova propriedade ao objeto jogo. Em JavaScript, é possível adicionar propriedades a objetos existentes a qualquer momento.
// d) Corrija o ano de lançamento considerando as informações fornecidas no objeto original.
jogo.ano = 2020;
// e) Apresente o objeto corrigido
console.log(jogo);