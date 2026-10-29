const { question } = require("readline-sync");

let equipamentos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Mouse",
    "Headset",
    "Mouse",
    "Teclado"
  ];
  
  let qtdMouse = equipamentos.filter(item => item === "Mouse").length;
  let qtdTeclado = equipamentos.filter(item => item === "Monitor" || item === "Teclado").length; // Exemplo ou separados:
  let qtdMonitor = equipamentos.filter(item => item === "Monitor").length;
  let qtdTecladoUnico = equipamentos.filter(item => item === "Teclado").length;
  
console.log(`Mouse: ${qtdMouse}`);
console.log(`Teclado: ${qtdTecladoUnico}`);
console.log(`Monitor: ${qtdMonitor}`);
let pesquisa = question("Digite o nome do equipamento pesquisado: ");
let contador = 0;

for (let i = 0; i < equipamentos.length; i += 1) {
    if (equipamentos[i].toLowerCase() === pesquisa.toLowerCase()) {
        contador++;
    }
}

console.log(`O equipamento ${pesquisa} aparece ${contador} vez(es)`)
