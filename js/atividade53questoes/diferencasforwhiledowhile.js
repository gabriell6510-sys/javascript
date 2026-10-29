//a) Resolva o problema utilizando for

// for (i = 0; i < 5; i += 1) {
//     console.log(i + 1)
// }
//b) Reescreva utilizando while.
// let contador = 0
// while(contador < 5) {
//     console.log(contador + 1);
//     contador ++;
// }
//c) Reescreva utilizando do...while.

let contador = 0
do  {
    console.log(contador + 1);
    contador++;
} while (contador < 5)

//d) Explique em qual situação cada estrutura pode ser mais conveniente
//Nesse caso na minha opinião é o for, porque é mais intuitívo, já para utilizar o while, é quando não tem um valor pré definido
// Já o do while ele ser executado uma vez para se ela precisa ser repetida 

// e) No do...while, o que acontece quando a condição é falsa já na primeira verificação?
// Ele não prossegue com o código,consequetemente ele barra de primeira.