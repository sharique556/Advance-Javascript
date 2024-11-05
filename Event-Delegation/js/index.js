// document.querySelector("#categories").addEventListener("click",(e)=>{
//     console.log("id",e.target.id)
//     if(e.target.tagName == "LI"){
//     window.location.href = "/"+e.target.id
//     }
// })

document.querySelector('#form').addEventListener('keyup',(e)=>{
    console.log(e)
    console.log(e.target.dataset.name); //This will log data-name i.e `This is name`
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase()
    }
    else if(e.target.dataset.lowercase != undefined){
        e.target.value = e.target.value.toLowerCase()
    }
    
})