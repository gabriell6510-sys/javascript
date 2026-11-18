//https://dummyjson.com/quotes/random
//A função do fetch é buscar dados de um servidor externo(Ex: APIs)
const result = fetch("https://dummyjson.com/quotes/random")
    .then((response) => response.json())
    .then((data) => console.log(data));

// await(espera)

const fetchAPI = async() => {
    const response = await fetch("https://dummyjson.quotes/random")
    const data = await response.json();

    console.log(data);
    
}
fetchAPI()

