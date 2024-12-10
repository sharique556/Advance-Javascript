// Putting handlers on child individually on each element like id- laptops,cameras,shoes,paragraph : Not a good practice
// document.querySelector("#laptops").addEventListener("click",(e)=>{
//     window.location.href = "/withoutDelegation/"+e.target.id
// })

// With event delegation, we can simply put the handlers on the parent that id - categories
document.querySelector("#categories").addEventListener("click",(e)=>{
    console.log("id",e.target.id)
    if(e.target.tagName == "LI"){
    window.location.href = "/"+e.target.id
    }
})

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
