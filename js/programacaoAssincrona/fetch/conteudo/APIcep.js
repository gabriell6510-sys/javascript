//htpps://viacep.com.br

// const fetchAPI = async () => {
//     const response = await fetch("http://viacep.com.br/ws/01001000/json/")
//     const data = await response.json();

//     console.log(data);
    
// }
// fetchAPI();

const fetchAPI = async (cep) => {
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json();

    console.log(data);
}
fetchAPI(66040030)