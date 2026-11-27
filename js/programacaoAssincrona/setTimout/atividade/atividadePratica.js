// 1)
// function esperar(mensagem, tempo) {
//     console.log(`O onibus vai sair do terminal às ${mensagem}h da manhã.`);

//     setTimeout(() => {
//         console.log(`O tempo que o passageiro tem para chegar na parada é ${tempo}min.`);
        
//     }, 2000)

// }

// function exibirMensagem() {
//     console.log("Voltando a tela principal.");
// }

// esperar(10, 15, exibirMensagem());

// 2)
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// console.log("3");
// Ordem de saída de dados ?
// 1, 3 e 2

//  Por que o "2" aparece por último com tempo 0 ?
// Por que ele "lê" o setTimeout e passa pro 3 e ve que não tem um tempo fixo ele só repassa o 2

// 3)
// Qual é a ordem da saída ?
// setTimeout(() => console.log("X"), 2000);
// setTimeout(() => console.log("Y"), 500);
// setTimeout(() => console.log("Z"), 1000);

// y, z e x

// 4)

function somarDepois(a, b, callback) {
    setTimeout(() => {
        const soma = a + b;
        callback(soma)
    }, 1000);
    
    
};

somarDepois(2, 3, resultado => console.log(resultado));
