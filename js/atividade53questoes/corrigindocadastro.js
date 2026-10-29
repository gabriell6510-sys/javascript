let participantes = [
 "Ana",
 "Bruno",
 "Carla",
 "Daniel",
 "Eduarda"
];
for (let i = 0; i < participantes.length; i += 1) {
 console.log(i + 1,":",participantes[i]);
}

// a) Identifique os dois problemas na estrutura de repetição.
// Problema 1) i <= participantes.length(estava inserindo o quinto numero)
// Problema 2) let i = 1 (estava errado, ele começava, do indice 1 e ignorava o indice 0)

// b) Corrija o código.
// let participantes = [
//  "Ana",
//  "Bruno",
//  "Carla",
//  "Daniel",
//  "Eduarda"
// ];
// for (let i = 0; i < participantes.length; i += 1) {
//  console.log(participantes[i]);
// }

// c) Modifique a solução para apresentar cada participante com seu número de ordem,
// let participantes = [
//  "Ana",
//  "Bruno",
//  "Carla",
//  "Daniel",
//  "Eduarda"
// ];
// for (let i = 0; i < participantes.length; i += 1) {
//  console.log(i + 1,":",participantes[i]);
// }