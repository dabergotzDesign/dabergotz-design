/* top nav */
const _nav = document.querySelector('.menu__nav');
const navIcons = document.querySelector('.menu__nav-icons');

const setNavState = () => {
  const scrolledPastThreshold = window.scrollY > 10;

  if (_nav) {
    _nav.classList.toggle('scrolled', scrolledPastThreshold);
    navIcons.classList.toggle('scrolled', scrolledPastThreshold);
  }


};

window.addEventListener('scroll', setNavState, { passive: true });
window.addEventListener('load', setNavState);

/* quick menu - copy email */
const emailText = document.getElementById("email-copy");
let tooltip = document.querySelector(".tooltip");

function copyEmail(){
  emailText.select();
  emailText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(emailText.value);

  tooltip.innerHTML = "copied email";

}

function outFunc(){
  tooltip.innerHTML = "copy to clipboard";
}


/* HAMBURGER MENU */
const ham_menu = document.querySelector(".mobile__menu-icon");
const closeHam = document.querySelector(".menu .close");
const mobileMenu = document.querySelector(".mobile__menu .menu");

ham_menu.addEventListener("click", ()=>{
  mobileMenu.classList.add("open");
});

closeHam.addEventListener("click", ()=>{
  mobileMenu.classList.remove("open");
});

/* navigation closes */
function navClose(){
  mobileMenu.classList.remove("open");
}