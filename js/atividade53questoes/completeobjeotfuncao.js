let computador = {
 marca: "Lenovo",
 memoriaRAM: 8,
 armazenamento: 256,
 ligado: false
};
// Apresente a marca.
console.log(computador.marca);
// Altere a memória RAM para 16 GB.
computador.memoriaRAM = 16;
// Ligue o computador.
computador.ligado = true;
// Apresente todas as informações.
console.log(
 `Marca: ${computador.marca}
RAM: ${computador.memoriaRAM} GB
Armazenamento: ${computador.armazenamento} GB
Ligado: ${computador.ligado}`
);