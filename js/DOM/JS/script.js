const aviso = document.getElementById("aviso");
const btnTema = document.querySelector("#btnTema");
const btnDestacar = document.querySelector("#btnDestacar");
const btnRemover = document.querySelector("#btnRemover");

// TOGGLE: alterna o tema da página
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");

});

// ADD: adicione uma classe ao aviso
btnDestacar.addEventListener("click", () => {
    aviso.classList.add("destaque");

});

// REMOVE: remove uma classe ao aviso
btnRemover.addEventListener("click", () => {
    aviso.classList.remove("destaque");
    
});