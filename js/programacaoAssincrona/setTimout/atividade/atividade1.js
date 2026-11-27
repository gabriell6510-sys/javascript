const pedidos = [
 { id: 1, cliente: "Ana", produto: "Hambúrguer", tempo: 3000 },
 { id: 2, cliente: "Carlos", produto: "Pizza", tempo: 5000 },
 { id: 3, cliente: "Marina", produto: "Sanduíche", tempo: 2000 }
];

function prepararPedido(pedido,callback) {
    console.log(`Preparando pedido ${pedido.id} - ${pedido.produto}`);

    setTimeout(() => {
        pedido.status = "Pronto";
        callback(pedido);
    }, pedido.tempo); 
}

function iniciarPedidos() {
    console.log("Iniciando os pedidos...");
    let finalizados = 0;
    
    pedidos.forEach(pedido => {
        prepararPedido(pedido, (pedidoPronto) => {
            console.log(`Pedido ${pedidoPronto.id} de ${pedidoPronto.cliente} esta pronto`);
            finalizados++;
        })

        if (finalizados === pedidos.length) {
            console.log("Todos os pedidos foram finalizados!");
        }
    });  
}

iniciarPedidos()

// TERMINAL — node lanchonete.js
// Iniciando os pedidos...
// Preparando pedido 1 - Hambúrguer
// Preparando pedido 2 - Pizza
// Preparando pedido 3 - Sanduíche
// [2s] Pedido 3 de Marina está pronto!
// [3s] Pedido 1 de Ana está pronto!
// [5s] Pedido 2 de Carlos está pronto!
// Todos os pedidos foram finalizados!
