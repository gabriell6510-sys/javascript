let ferramentas = [
    "VS Code",
    "GitHub",
    "MySQL Workbench",
    "Node.js",
    "Postman"
];

console.log(ferramentas[0]);
console.log(ferramentas[2]);
console.log(ferramentas[4]);
console.log(ferramentas.length);

// a) O que será apresentado em cada linha?
//Os elementos que estao nos indices, e o total de elementos

// b) Quantos elementos existem no array?
// 4
// c) Qual é o índice do último elemento?
// 4
// d) O que acontece ao executar console.log(ferramentas[5])?
// Dara erro porque no JavaScript o array começa com o indice 0 

// e) Como substituir "Postman" por "Insomnia"?
// ferramentas.splice(Postman,1,Insonia)