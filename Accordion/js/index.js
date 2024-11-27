const accordion_tab_array = document.querySelectorAll(".title");
accordion_tab_array.forEach((elem)=>{
    let accordion_content = elem.nextSibling;
    elem.addEventListener("click",()=>{
        console.log("tred")
        if(accordion_content.nextSibling.className !== "active"){
            accordion_content.nextSibling.className = "active"
        }else{
            accordion_content.nextSibling.className = "accordion-content"
        }
    })
})