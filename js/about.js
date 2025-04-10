const carousel = document.querySelector(".tool__carousel"),
    tools_secondary = document.querySelector(".secondary"),
    toolbox = document.querySelector(".about__toolbox");

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mouseenter", ()=>{
    if(toolbox.classList.contains("auto")){
        toolbox.classList.remove("auto");
        tools_secondary.style.display = "none";
    }
});

carousel.addEventListener("mousedown", e =>{
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mousemove", e =>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x -startX) * 3;
    carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener("mouseup", () => {
    isDown = false;
})

carousel.addEventListener("mouseleave", ()=>{
    isDown = false;

    if(!toolbox.classList.contains("auto")){
        toolbox.classList.add("auto");
        tools_secondary.style.display = "flex";
    }
})