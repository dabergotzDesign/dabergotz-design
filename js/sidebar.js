//let open_menu = document.querySelector(".sidebar__controls-open");
//let close_menu = document.querySelector(".sidebar__controls-close");

const sidebar = document.querySelector(".sidebar");
const sidebar_title = document.querySelector(".sidebar__title");
const sidebar_nav = document.querySelector(".sidebar__nav");
const sidebar_controls = document.querySelector(".sidebar__controls");

let menuBtn = document.querySelector(".sidebar__controls-button");

let menuAni = new TimelineMax({paused: true});
let menuAniReverse = new TimelineMax({paused: true});
let toggle = true;

let screen_width = window.innerWidth;

menuAni.to(
    sidebar, 0.8, {
        width: 360,
        ease: Power2.easeInOut,
        transform: "translate3d(0,0,0)"
    }
    ,0
)

menuAniReverse.to(
    sidebar, 0.5, {
        width: 0,
        ease: Power2.easeIn,
        transform: "translate3d(-100px,0,0)"
    }
    , 0
)


window.addEventListener("load", menuLoad());
window.addEventListener("resize", menuLoad());



function menuLoad(){

    if(screen_width < 900){
        menuAniReverse.play(0);
    }

};


menuBtn.addEventListener("click", ()=>{

    toggle = !toggle;
    toggle == false ? menuAni.play(0) : menuAniReverse.play(0);

    if(toggle == false){
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-chevron-left");

        menuBtn.style.border = "none";
        menuBtn.style.backgroundColor = "transparent";
    }else{
        menuBtn.classList.remove("fa-chevron-left");
        menuBtn.classList.add("fa-bars");

        menuBtn.style.border = "thin solid var(--bg-light)";
        menuBtn.style.backgroundColor = "var(--bg-dark)";
    }


});


/*
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
*/



/*

menuAni.to(
    navMain, 0.8, {
        width: 320,
        ease: Power2.easeInOut,
        transform: "translate3d(0,0,0)"
    }
    ,0
)

menuAniReverse.to(
    navMain, 0.5, {
        width: 0,
        ease: Power2.easeIn,
        transform: "translate3d(0,0,0)"
    }
    , 0
)

menuBtn.addEventListener("click", ()=>{
    toggle = !toggle;
    toggle == false ? menuAni.play(0) : menuAniReverse.play(0);

    if(toggle == false){
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-chevron-left");
    }else{
        menuBtn.classList.remove("fa-chevron-left");
        menuBtn.classList.add("fa-bars");
    }
})

*/


