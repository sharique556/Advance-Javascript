let modalElem = document.querySelector(".modal")
let btnElement = document.querySelector(".open_btn")
let close_btn = document.querySelector(".close")
let textElement = document.querySelector(".text")

btnElement.addEventListener('click', () => {
    modalElem.style.display = "block";
    textElement.style.filter = "blur(2px)";   //Blur background
    document.body.style.overflowY = "hidden"; //Disable vertical scrolling when modal gets open
})

close_btn.addEventListener('click',()=>{
    modalElem.style.display="none"
    textElement.style.filter = "blur(0)";
    document.body.style.overflowY = "visible";  //Enable vertical scrolling when modal gets closed
})