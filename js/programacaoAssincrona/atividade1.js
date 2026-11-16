const pedidos = [
 { id: 1, cliente: "Ana", produto: "Hambúrguer", tempo: 3000 },
 { id: 2, cliente: "Carlos", produto: "Pizza", tempo: 5000 },
 { id: 3, cliente: "Marina", produto: "Sanduíche", tempo: 2000 }
];

function prepararPedido(pedido,callback) {
    console.log("Iniciando pedidos");
    
    pedidos.forEach(pedido => {
        console.log(`Preparando pedido ${pedido.id} - ${pedido.produto}`);
    });

    tempo = pedido.tempo / 1000

    setTimeout(() => {
        callback(pedido);
    }, pedido.tempo)
}

function mensagem() {
    console.log("Todos os pedidos foram finalizados!");
}
prepararPedido(mensagem)

// TERMINAL — node lanchonete.js
// Iniciando os pedidos...
// Preparando pedido 1 - Hambúrguer
// Preparando pedido 2 - Pizza
// Preparando pedido 3 - Sanduíche
// [2s] Pedido 3 de Marina está pronto!
// [3s] Pedido 1 de Ana está pronto!
// [5s] Pedido 2 de Carlos está pronto!
// Todos os pedidos foram finalizados!