(async function(){
    const res = await fetch("https://api.github.com/users");  
    const data = await res.json();  
    console.log(data)
    data.forEach(elem=> {
            const markUp = `<li>${elem?.login}</li>`
            document.querySelector('ul').insertAdjacentHTML('beforeend',markUp);
    });
    
})()