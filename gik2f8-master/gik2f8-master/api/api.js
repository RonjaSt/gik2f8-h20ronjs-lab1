const url ='http://gik2f8-labs.herokuapp.com/books';

async function getAll(){
    const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);
   
    return result;
} 

async function getApi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json()
    .catch ((e)=>e);
    return data;
}

    
// Call