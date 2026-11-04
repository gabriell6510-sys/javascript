const dadosJSON = '{"nome": "Mariana","idade":21,"curso":"Desenvolvimento de Sistemas"}';
console.log(typeof dadosJSON);

const aluno = JSON.parse(dadosJSON) // o parse(pega uma string e joga pra objeto)

console.log(aluno);
console.log(typeof aluno);

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);

