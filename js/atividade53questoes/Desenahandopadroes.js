let asterisco = "*";
let numero = 1;
// Do menor para o maior
// for (let i = 0; i <= 5; i += 1) {
//     console.log("*".repeat(i))
// }
//Invertido
for (let i = 5; i >= 1; i --) {
    console.log("*".repeat(i))
}
// 1, 22, 333
for (let i = 0; i <= 5; i += 1) {
    let resultado = String(i).repeat(i)
    console.log(resultado)
}
