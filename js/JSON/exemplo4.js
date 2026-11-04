const funcionario = {
    nome: "Gabriel",
    cargos: "Operador de camera",
    salario: 4500
};

// asserializando o texto
const funcionarioJSON = JSON.stringify(funcionario)
console.log(funcionarioJSON);
console.log(typeof funcionarioJSON);

// Desserializando o texto
const funcionarioVoltaJSON = JSON.parse(funcionarioJSON);
console.log(funcionarioVoltaJSON);

// Acessando os dados recuperados
console.log(typeof funcionarioVoltaJSON);
console.log(funcionarioVoltaJSON.nome);
console.log(funcionarioVoltaJSON.cargos);

