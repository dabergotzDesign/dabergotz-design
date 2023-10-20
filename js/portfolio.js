/* let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 

  });
} */

//MOBILE SIDESCROLL

let page = document.querySelector(".portfolio__wrapper-mobile");

page.addEventListener("scroll", () =>{
  
  let winScroll = document.body.scrollLeft || page.scrollLeft;
  let winWidth = page.scrollWidth - page.clientWidth;
  let scrolled = (winScroll / winWidth) * 100;
  
  document.getElementById("bar").style.width = scrolled + "%";

});





