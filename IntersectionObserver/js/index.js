const Green_Elem = document.querySelector(".green-block");

const options = {
    root: null, // set document viewport as root
    rootMargin: '0px', // margin around root
    threshold: 1.0 // 1.0 means that when 100% of the target is visible 
    //inside the root, then observer callback is invoked
}

const observer = new IntersectionObserver((entries)=>{
    const [entry] = entries;
    console.log("coming")
    if(entry.isIntersecting){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        console.log("In a green block viewport")
    }else{
        console.log("Still not in green viewport")
    }
},options)

observer.observe(Green_Elem)