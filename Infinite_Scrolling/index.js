let loadingDiv = document.querySelector(".loading_msg");
let contentDiv = document.querySelector(".contents")

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

const fetchData = (count = 10) => {
    return new Array(count).fill(0).map((elem, index) => {
        return `Newly added item id:${Date.now() + index}`
    })
}

const appendData = () => {
    const itemArray = fetchData();
    itemArray.forEach((elem) => {
        const div = document.createElement("div");
        div.className = "item"
        div.textContent = elem;
        contentDiv.appendChild(div);
    })
}

appendData()

const Observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        appendData()
    }
}, options)

Observer.observe(loadingDiv)