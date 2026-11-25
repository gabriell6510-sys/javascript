// document.getElementById("id")
// Busca um unico elemento pelo id(e o id é único)
// No argumento passa o nome id sem o #.
// E retorna o elemento encontrado ou null se não existir

const titulo = document.getElementById("titulo-principal");

titulo.textContent = "Titulo atualizada via JS!"; // o textContent altera o texto dentro do HTML

titulo.style.color = "darkblue"; // o titulo.style.color muda a cor
