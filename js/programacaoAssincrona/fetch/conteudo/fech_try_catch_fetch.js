const fetchAPI = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.users[2]);
        
    } catch(error) {
        console.log("Ocorreu um erro: ", error);
    }
};

fetchAPI("https://dummyjson.com/users");