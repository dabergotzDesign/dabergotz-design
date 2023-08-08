let open_menu = document.querySelector(".sidebar__controls-open");
let close_menu = document.querySelector(".sidebar__controls-close");
const sidebar = document.querySelector(".sidebar");
const sidebar_title = document.querySelector(".sidebar__title");
const sidebar_nav = document.querySelector(".sidebar__nav");
const sidebar_controls = document.querySelector(".sidebar__controls");

let screen_width = window.innerWidth;


window.addEventListener("load", ()=>{
    if(screen_width < 800){
        open_menu.classList.remove('hidden');
        close_menu.classList.add('hidden');

        open_menu.style.visibility = "visible";
        open_menu.style.display = "block";

        sidebar.style.width = 0;
        sidebar_title.style.visibility = "hidden";
        sidebar_nav.style.visibility = "hidden";
        sidebar_controls.style.left = "10%";
    }
});


open_menu.addEventListener("click", ()=>{
    if(close_menu.classList.contains('hidden')){
       
        close_menu.classList.remove('hidden');
        open_menu.classList.add('hidden');

        sidebar.style.width = "320px";
        open_menu.style.visibility = "hidden";

        sidebar_title.style.visibility = "visible";
        sidebar_nav.style.visibility = "visible";
        sidebar_controls.style.left = "150%";
    }
});


close_menu.addEventListener("click", ()=>{
    if(open_menu.classList.contains('hidden')){
   
        open_menu.classList.remove('hidden');
        close_menu.classList.add('hidden');

        open_menu.style.visibility = "visible";
        open_menu.style.display = "block";

        sidebar.style.width = 0;
        sidebar_title.style.visibility = "hidden";
        sidebar_nav.style.visibility = "hidden";
        sidebar_controls.style.left = "10%";
    }
});


