const { question } = require("readline-sync");

let resultado = [5,12,23,34,45,58];

//Array para aramzenar a aposta do usuário
let aposta = [];

console.log("==== MINHA APOSTA DA MEGA-SENA ====");

//1. Receber os seis números da aposta

while(aposta.length < 6) {
    let numero = Number(question("Digite um numero entre 1 e 60: "));

    if (numero < 1 || numero > 60 || !Number.isInteger(numero)) {
        console.log("Numero invalido! Digite um inteiro entre 1 e 60: ");
    }

    else if (aposta.indexOf(numero) !== -1) {
        //Veificar se o número ja foi escolhido
        console.log("Voce ja escolheu esse numero! Digite outro.");
    } else {
        aposta.push(numero); // adiciona no final da lista 

        console.log("Numero registrado!");

    }
}

// 2. Exibir a aposta do usuario
console.log("\n==== Sua Aposta ====");
console.log(aposta);

// 4. Comparar os numeros das duas listas
let acertos = 0;
let numerosAcertados = [];

for (let i = 0; i < aposta.length; i++) {
    for (let j = 0; j < resultado.length; j++) { //  j menor que o array resultado
        if (aposta[i] === resultado[j]) { // se o elemento i dentro da lista array(aposta) for igual ao elemento do array que eu coloquei na lista resultado ele pega a variável contador(acertos)  depois coloca no fina lda lista numerosAcertados.push(aposta[i]);
            acertos++;

            numerosAcertados.push(aposta[i]);
        }
    }
} 

//5Exibir os numeros acertados
console.log("\n===== RESULTADO DA APOSTA =====");

if (acertos > 0) {
    console.log("Numeros acertados: ");

    for (let i = 0; i < numerosAcertados.length; i++) {
        console.log(numerosAcertados[i]);
    }
} else {
    console.log("Voce nao acertou nenhum numero.");
}

if (acertos === 6) {
    console.log("Parabens Voce acertou a SENA!");
}

else if (acertos === 5) {
    console.log("Parabens Voce acertou a QUINA"); 
}

else if (acertos === 4) {
    console.log("Parabens Voce acertou a QUADRA");
} else {
    console.log("Voce nao atingiu a faixa de premiacao da atividade.");
}
console.log("Fim do programa.")
//isInteger(Precisa ser inteiro)
// indexOf(Pega um índice, e se esse índice já tiver na lista ele para.)
