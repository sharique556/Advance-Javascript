// Event bubbling means events will be bubbled up from Bottom to Top.
// Event capturing means events will be trickled down from Top to Bottom.
// If third argument of .addEventListener is set to TRUE then , events must be captured/trickled, 
// otherwise it will be bubbled up. 

document.querySelector("#grandParent")
    .addEventListener('click',()=>{
    console.log("Grandparent is clicked")
})

document.querySelector("#parent")
    .addEventListener('click',()=>{
    console.log("Parent is clicked")
})

document.querySelector("#child")
    .addEventListener('click',(e)=>{
    // e.stopPropagation()  This can be used to stop the propagation after this point
    console.log("Child is clicked")
}) 