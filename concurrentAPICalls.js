const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
]

const getResponse = async (urls) => {
    const response  = await fetch(urls);
    const data = await response.json()
    return data;
}

let arrayPromises = urls.map((elem)=>{
    return getResponse(elem)
})

Promise.all(arrayPromises).then((data)=>{
    console.log("success=>",data)
}).catch((err)=>{
    console.log("Error ===>",err)
})