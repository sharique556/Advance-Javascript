function expensiveFunc(e) {
    console.log("typed",e.target.value)
}

let debounce = function(fn,delay){
    let timer 
    return function(){
        let context = this;
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
}

document.querySelector(".myInput").addEventListener("keyup",debounce(expensiveFunc,1000))