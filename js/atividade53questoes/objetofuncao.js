// Criação do objeto personagem
let personagem = {
    nome: "Herói",
    vida: 100,
    nivel: 5,
    experiencia: 1200
};

// Função para reduzir a vida conforme as regras
function receberDano(personagem, dano) {
    personagem.vida -= dano;
    
    // A vida não pode ficar abaixo de zero
    if (personagem.vida <= 0) {
        personagem.vida = 0;
        console.log("Personagem derrotado!");
    } else {
        console.log(`Vida restante: ${personagem.vida}`);
    }
}

// Testes com diferentes quantidades de dano
receberDano(personagem, 30); // Vida restante: 70
receberDano(personagem, 50); // Vida restante: 20
receberDano(personagem, 40); // Personagem derrotado!
