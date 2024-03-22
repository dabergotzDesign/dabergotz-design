/* ///!!! DEPRECATED !!!/// (but keep it, cause you never know)

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

*/

///sidebar mobile menu hide & show

const menuB = document.querySelector(".nav__button"),
      menuIcon = document.querySelector(".icon"),
      sidebarM = document.querySelector(".sidebar");

let navButton = document.querySelectorAll(".mobile__nav-item");


if(window.innerWidth >= "480"){
  
  menuB.style.display = "none";

  sidebarM.classList.remove("hidden");

}else{

  menuB.style.display = "block";
  sidebarM.classList.add("hidden");

} 

if(window.innerWidth <= 480){

  navButton.forEach( a => {
  
    a.addEventListener("click", mobileMenu);
  
  });

}



menuB.addEventListener("click", mobileMenu);

function mobileMenu(){
  menuB.classList.toggle("menu");

  if(menuB.classList.contains("menu")){
    menuIcon.classList.remove("fa-angle-left");
    menuIcon.classList.add("fa-bars");
  }else{
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-angle-left");
  }

  sidebarM.classList.toggle("hidden");
}



/////CURRENT SECTION ACTIVE

let sections = [...document.querySelectorAll(".main__section")];
const getLinkById = (id) => document.querySelector(`a[href='#${id}']`);



const inView = (section) => {
  let top = section.offsetTop;
  let height = section.offsetHeight;

  while (section.offsetParent) {
    section = section.offsetParent;
    top += section.offsetTop;
  }

  return (
    top < window.scrollY + window.innerHeight &&
    top + height > window.scrollY
  );
};

window.addEventListener("scroll", ()=>{

  let next = false;

  sections.forEach((sect) => {
    const a = getLinkById(sect.id);

    if (inView(sect) && !next) {
      a.classList.add("active");
      next = true;
    } else {
      a.classList.remove("active");
    }
  });

})

/* 
 window.onscroll = () => {
  let next = false;

  sections.forEach((sect) => {
    const a = getLinkById(sect.id);

    if (inView(sect) && !next) {
      a.classList.add("active");
      next = true;
    } else {
      a.classList.remove("active");
    }
  });
};
 */