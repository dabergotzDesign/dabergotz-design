const cursor = document.querySelector('.custom_cursor');
const hover = document.querySelectorAll(".hover");

document.addEventListener('mousemove', e =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';

})

window.addEventListener("mousedown", ()=>{
    cursor.style.backgroundColor = "#FF006D";
})

window.addEventListener("mouseup", ()=>{
    cursor.style.backgroundColor = "#0d0d0d";
})

hover.forEach(e => {
    e.addEventListener("mouseenter", ()=>{
        cursor.classList.add("state_hover");
    })
});

hover.forEach(e => {
    e.addEventListener("mouseleave", ()=>{
        cursor.classList.remove("state_hover");
    })
});