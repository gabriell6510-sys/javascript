function calcularAreaRetangulo(largura, altura) {
    let area = altura * largura;
    return area;
}

function calcularPerimetroRetangulo(largura, altura) {
    let perimetro = altura * largura;
    return perimetro;
   
}

let areaCalculada = calcularAreaRetangulo(8, 5);
let perimetroCalculado = calcularPerimetroRetangulo(8, 5);

console.log("Área:", areaCalculada);       // Exibe 40
console.log("Perímetro:", perimetroCalculado); // Exibe 26

//Parâmetros (largura e altura): São as variáveis/nomes definidos na declaração da função. Eles funcionam como "espaços reservados" (ou etiquetas) que recebem os valores quando a função é chamada.   Argumentos (8 e 5): São os valores reais que passamos para a função no momento em que a executamos. O número 8 é enviado para o parâmetro largura e o número 5 é enviado para o parâmetro altura