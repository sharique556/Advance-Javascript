const Green_Elem = document.querySelector(".green-block");

const options = {
    root: null, // set document viewport as root
    rootMargin: '0px', // margin around root
    threshold: 1.0 // 1.0 means that when 100% of the target is visible 
    //inside the root, then observer callback is invoked
}

const observer = new IntersectionObserver((entries)=>{
    const [entry] = entries;
    if(entry.isIntersecting){
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });  // Automatic scrolling to top
        alert("In a green block viewport")
        confirm("Click OK if you looking at green panel");
        prompt("Say Hi to green display", "");
    }
},options)

observer.observe(Green_Elem)

 // PRACTICAL USE  :
//  Efficient Image Loading Consider a long-scrolling image gallery. 
//  Loading every image at once hampers performance. Intersection Observer to the rescue! 
//  It loads images as they enter the view, conserving bandwidth and enhancing page load speeds.