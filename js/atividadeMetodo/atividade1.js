const readline = require("readline-sync")
const livros = [
    {
        titulo: "JavaScript: O Guia Definitivo",
        autor: "David Flanagan",
        categoria: "Programacao",
        ano: 2022,
        disponivel: true,
        paginas: 700
    },
    {
        titulo: "Clean Code",
        autor: "Robert Martin",
        categoria: "Programacao",
        ano: 2009,
        disponivel: false,
        paginas: 425
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        categoria: "Fantasia",
        ano: 1937,
        disponivel: true,
        paginas: 310
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ficcao",
        ano: 1949,
        disponivel: false,
        paginas: 328
    },
    {
        titulo: "A Revolucao dos Bichos",
        autor: "George Orwell",
        categoria: "Ficcao",
        ano: 1945,
        disponivel: true,
        paginas: 152
    }
];

while(true) {
    console.log("1 - lOCALIZAR LIVRO PELO TITULO");
    console.log("2 - LISTAR LIVROS DISPONIVEIS");
    console.log("3 - ENCONTRAR TODOS OS LIVROS DE UM AUTOR");
    console.log("4 - VERFICAR ALGUM LIVRO DISPONIVEL");
    console.log("5 - VERFICA SE EXISTE ALGUM LIVRO INDISPONIVEL");
    console.log("6 - CRIA UMA LISTA COM TITULO E AUTOR");
    console.log("7 - QUANTIDADE TOTAL DE PÁGINAS DO CATAGOLO");
    console.log("8 - ORDENAR LIVRO PELO ANO DE PUBLICACAO");
    console.log("9 - GERAÇÃO DE RELATORIO COMPLETO");
    console.log("10 - EMPRESTAR LIVRO");
    console.log("11 - SAIR DO SISTEMA");
    let opcao = Number(readline.question("Escolha uma opcao acima de 1 a 10: "));
    if (opcao === 11) {
        console.log("Sistema encerrado");
        break;
    }

    switch(opcao) {
        case 1:
            let escolha = readline.question("Digite qual titulo do livro voce quer: ");
            const localizaTitulo = livros.find(livro => {
                return livro.titulo === escolha
            })
            
            if (localizaTitulo) {
                console.log(`Livro: ${escolha}`);
            } else {
                console.log("Titulo nao encontrado");
                
            }
            break;
              
        case 2:
            const listaLivroDisponivel = livros.filter(livro => {
                return livro.disponivel === true;
            });
            console.log("LIVROS DISPONIVEIS:");

            if (listaLivroDisponivel) {
                listaLivroDisponivel.forEach((livro, indice) => {
                console.log(`${indice + 1}: ${livro.titulo}`);
            })
            }
            break;

        case 3:
            let escolha_autor = readline.question("Qual autor voce deseja visualizar as suas obras: ");
            const encontrarLivroAutor = livros.filter(livro => {
                return livro.autor === escolha_autor
            });

            if (encontrarLivroAutor) {
                    encontrarLivroAutor.forEach((livro,indice) => {
                    console.log(`Os livros do autor ${livro.autor}: ${livro.titulo}`);  
                });  
            }
            break;

        case 4:
            const livroInexistente = livros.some(livro => {
                return livro.disponivel === false;
            });

            if (livroInexistente) {
                console.log("Existe livro que está indisponivel no momento");
            }

        case 5:
            const livroExistente = livros.every(livro => {
                return livro.disponivel === true;
            })

            if (livroExistente) {
                console.log("Todos os livros estao disponiveis");
            } else {
                console.log("Existe livo que está indisponivel no momento");
            }
            break;

        case 6:
            const criaLista = livros.map(livro => {
                return {
                    nomeTitulo: livro.titulo,
                    autor: livro.autor
                }
            })

            if (criaLista) {
                criaLista.forEach((livro,indice) => {
                    console.log(`${livro.nomeTitulo}: ${livro.autor}`);
                })
            } else {
                console.log("Não existe autor e nem titulo");
                
            }
            break;

        case 7:
            const quantidadeTotal = livros.reduce((acumulador, livro) => acumulador + livro.paginas, 0);
            livros.forEach(livro => {
                console.log(`Quantidade total de paginas do livro ${livro.titulo}: ${livro.paginas}`);
            });

            console.log(`Quantidade total de paginas do catalago: ${quantidadeTotal}`);
            break;
            
        case 8:
            const ordenacaoLivroAno = livros.sort(livro => {
                return livro.ano
            })
            if (ordenacaoLivroAno) {
                ordenacaoLivroAno.forEach(livro => {
                    console.log(`O livro ${livro.titulo} foi lançado em ${livro.ano}`);
                })
            }
            break;
        
        case 9:
            livros.forEach (livro => {
                console.log(`O autor do livro ${livro.titulo} foi ${livro.autor}, a sua categoria e ${livro.categoria}, e foi lançado em ${livro.ano} este livro tem ${livro.paginas} paginas`);
                if (livro.disponivel === true) {
                    console.log("Esta disponivel");
                } else {
                    console.log("Nao esta disponivel");
                }
            })
            break;
            
        case 10:
            let livroEmprestimo = readline.question("Digite o titulo do livro que deseja emprestar: ");
    
        // 1. Localiza o objeto do livro no array pelo título
        let livroEncontrado = livros.find(livro => livro.titulo.toLowerCase() === livroEmprestimo.toLowerCase());

        // 2. Verifica se o livro existe e se está disponível
        if (livroEncontrado) {
            if (livroEncontrado.disponivel === true) {
                // 3. Altera a propriedade para false (emprestado)
                livroEncontrado.disponivel = false;
                console.log(`Sucesso! O livro "${livroEncontrado.titulo}" foi emprestado.`);
            } else {
                console.log(`O livro "${livroEncontrado.titulo}" já se encontra emprestado.`);
            }
        } else {
            console.log("Livro não encontrado no catálogo.");
        }
        break;
   
    }
}
