const { question } = require("readline-sync");

let lista_nomes = ["Gabriel", "Athos", "Pedro", "Sheyla", "Fernando"];
console.log("Lista inicial:", lista_nomes);

let certeza = question("Voce deseja adicionar um nome na lista (sim, nao): ");

// 1. Exibir todos os nomes cadastrados junto com suas posições
for (let i = 0; i < lista_nomes.length; i += 1) {
    console.log(i + 1, ":", lista_nomes[i]);
}

if (certeza === "sim") {
    let nome = question("Digite o nome: ");

    // Valida se o nome já existe
    if (lista_nomes.indexOf(nome) !== -1) {
        console.log("Esse nome ja existe, digite outro");
        nome = question("Digite o nome: ");
    }

    // 3. Adiciona nome
    lista_nomes.push(nome);

    console.log("\nLista atualizada:");
    
    for (let i = 0; i < lista_nomes.length; i += 1) {
        console.log(i + 1, ":", lista_nomes[i]);
    }
}


let nomemaior5 = 0;
for (let i = 0; i < lista_nomes.length; i += 1) {
    if (lista_nomes[i].length > 5) {
        nomemaior5 += 1;
    }
}

console.log(`\nQuantidade de nomes com mais de 5 caracteres: ${nomemaior5}`);

console.log(`Quantidade total de nomes cadastrados: ${lista_nomes.length}`);