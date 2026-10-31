/* top nav */
const nav = document.querySelector('.menu__nav');
const navIcons = document.querySelector('.menu__nav-icons');

const setNavState = () => {
  const scrolledPastThreshold = window.scrollY > 10;

  if (nav) {
    nav.classList.toggle('scrolled', scrolledPastThreshold);
    navIcons.classList.toggle('scrolled', scrolledPastThreshold);
  }


};

window.addEventListener('scroll', setNavState, { passive: true });
window.addEventListener('load', setNavState);