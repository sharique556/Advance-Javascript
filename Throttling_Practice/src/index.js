let expensiveFunc = () => {
    console.log(window.innerWidth,window.innerHeight)
}

let throttle = function(fn,delay){
    let flag = true
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            flag = false;
            fn.apply(context,args)
            setTimeout(()=>{
                flag=true
            },delay)
        }

    }

}

window.addEventListener("resize",throttle(expensiveFunc,2000))