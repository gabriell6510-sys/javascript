// document.querySelector("selectorCSS")
// Ele busca apenas o primeiro elemento que seja igual a qualquer CSS válido(classe, tag, id, atributo, combinadores).
// Passa pelo argumento: Uma string com sintaxe CSS(#id,.classe,div p, input[type = "email"]).
// HTML: <p class="aviso">Primeiro aviso</p> <p class="aviso">Segundo aviso</p>
const primeiroAviso = document.querySelector(".aviso");

primeiroAviso.style.fontWeight = "bold"; // Altera apenas o primeiro <p class="aviso">
