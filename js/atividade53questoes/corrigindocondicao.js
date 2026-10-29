const idade = 12;
const acompanhado = true;
if (idade >= 12 && acompanhado === true) {
 console.log("Entrada permitida");
} else {
 console.log("Entrada não permitida");
}

// Como no código anterior tinha o || o sistema poderia dar erro se pelo menos um fosse verdadeiro 
// O erro era o ou
