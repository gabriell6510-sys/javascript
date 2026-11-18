fetch("https://dummyjson.com/quotes/random")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Erro HTTP: " + response.status);
//         }

//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(erro => console.log("Erro: ", erro.message));