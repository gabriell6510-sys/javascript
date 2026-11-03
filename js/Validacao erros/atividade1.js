const { question } = require("readline-sync");

const livros = [
    {
        titulo: "JavaScript para Iniciantes",
        autor: "Carlos Silva",
        categoria: "Programação",
        disponivel: true
    },
    {
        titulo: "O Homem mais rico da babilonia",
        autor: "George S. Clason",
        categoria: "Financas",
        disponivel: true
    },
    {
        titulo: "O Homem que comprou o tempo",
        autor: "Thiago Nigro",
        categoria: "Financas",
        disponivel: false
    },
    {
        titulo: "Voce e o que pensa",
        autor: "James Allen",
        categoria: "autoajuda",
        disponivel: true
    }
]

function cadastrarLivros() {
    try {
        let tituloLivro = question("Digite o titulo do livro: ").trim().toLowerCase();
        let autorLivro = question("Informe o autor do livro: ").trim().toLowerCase();
        let categoriaLivro = question("Informe a categoria do livro: ").trim().toLowerCase();
        let disponivelLivro = question("Informe a disponibilidade do livro (true/false): ").trim().toLowerCase();

        if (disponivelLivro === true) {
            disponivelLivro = true
        } else if (disponivelLivro === false) {
            disponivelLivro === false
        } else {
            console.log("Valor invalido! Digite true ou false");
            
        }

        if (tituloLivro !== "" && autorLivro !== "" && categoriaLivro !== "" && disponivelLivro !== "") {
            livros.push({
                titulo: tituloLivro,
                autor: autorLivro,
                categoria: categoriaLivro,
                disponivel: disponivelLivro
            })
            
            console.log("Livro cadastrado com sucesso");
            
        }
        
        if (tituloLivro === "") {
            throw new Error("Nome do titulo do livro nao pode ser vazio");
        }

        if (autorLivro === "") {
            throw new Error("Nome do autor do livro nao pode ser vazio");
        }

        if (categoriaLivro === "") {
            throw new Error("Nome da categoria do livro nao pode ser vazio");
        }
    } catch(erro) {
        console.log("Error: " + erro.message);
    }
} 

function listrarLivros() {
    livros.forEach(livro => {
        console.log(`O autor do livro ${livro.titulo} e o, ${livro.autor} e a sua categoria e ${livro.categoria}`);
    })
}

function consultarLivro() {
    try {
        let consultaLivro = question("Informe o livro que voce quer consultar: ").trim()

        const consulta = livros.find(livro => livro.titulo === consultaLivro);
 
        
        if (consulta) {
            console.log(`O livro ${consultaLivro} esta na lista`);
        } else {
            console.log("O livro nao esta na lista"); 
        }

        if (consultaLivro === "") {
            throw new Error("Livro nao pode ser vazio")
        }
    }  catch(erro) {
        console.log(`Erro: ${erro.message}`);
        
    }
}

function realizarEmpresimo() {
    try {
        let emprestimoLivro = question("Informe o livro que voce deseja ser emprestado: ");
        const emprestimo = livros.find(livro => {
        return livro.titulo.toLowerCase() === emprestimoLivro.toLowerCase() && livro.disponivel === true;
    })
    if (emprestimoLivro === "") {
        throw new Error("O livro nao pode ser vazio")
    }
    if (emprestimo) {
        emprestimo.disponivel = false;
        console.log(`O livro ${emprestimoLivro} foi emprestado`);
    } else {
        console.log("Livro nao encontrado para emprestimo");
    }
    } catch(erro) {
        console.log(`Erro: ` + erro.message);
        
    }
    
        
}

function realizarDevolucao() {
    let devolucaoLivro = question("Informe o livro que voce quer devolver: ").trim()
    const devolucao = livros.find(livro => {
        return livro.titulo.toLowerCase() === devolucaoLivro.toLowerCase() && livro.disponivel === false;
    });

    if (devolucao) {
        devolucao.disponivel = true;
        console.log(`O livro ${devolucaoLivro} foi devolvido com sucesso!`);

    } else {
        console.log("livro nao encontrado para devolucao");
        
    }
}

function listarLivrosEmprestados() {
    const listarLivroEmprestado = livros.filter(livro => {
        return livro.disponivel === true;
    });
    listarLivroEmprestado.forEach(livro => {
        console.log(`O livro ${livro.titulo}, encontra-se emprestado`);
        
    })
}

while (true) {
    console.log("1 - Cadastrar livro.");
    console.log("2 - Listar todos os livros.");
    console.log("3 - Consultar livro.");
    console.log("4 - Realizar empréstimo.");
    console.log("5 - Realizar devolucao.");
    console.log("6 - Listrar livros emprestados.");
    console.log("7 - Sair.");
    let opcao = Number(question("Digite uma das opcoes acima: "))
    if (opcao === 7) {
        console.log("Fim do sistema!");
        break;
    }

    switch(opcao) {
        case 1:
            cadastrarLivros();
            break;

        case 2:
            listrarLivros();
            break;

        case 3:
            consultarLivro();
            break;

        case 4:
            realizarEmpresimo();
            break;
            
        case 5:
            realizarDevolucao();
            break;

        case 6:
            listarLivrosEmprestados();
            break;
    }
}