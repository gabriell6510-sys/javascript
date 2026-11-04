const aluno = {
    nome: "Gabriel",
    idade: 21,
    curso: "Desenvolvimento de Sistemas"
};

const alunoJSON = JSON.stringify(aluno);

console.log(alunoJSON);
// Observa a diferença:
console.log(typeof aluno);
// object

console.log(typeof alunoJSON);
// string
