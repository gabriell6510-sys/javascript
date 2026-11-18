// "https://dummyjson.com/users"

const fetchAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.users[2]);
    
}
fetchAPI("https://dummyjson.com/users");

