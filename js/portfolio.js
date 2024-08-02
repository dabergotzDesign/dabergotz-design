let button_next = document.querySelector(".slider__button-right"),
 button_prev = document.querySelector(".slider__button-left"),
 nextCard = document.querySelector(".next"),
 currentCard = document.querySelector(".current"),
 previousCard = document.querySelector(".previous");
 


button_next.addEventListener("click", () =>{
  
  if(currentCard.classList.contains("active") && !nextCard.classList.contains("active")){

    currentCard.classList.remove("active");
    nextCard.classList.add("active");

    currentCard.style.transform = "translateX(-30%)";
    nextCard.style.transform = "translateX(-100%)";

  }

  if(!currentCard.classList.contains("active") && previousCard.classList.contains("active")){
    previousCard.classList.remove("active");
    currentCard.classList.add("active");

    currentCard.style.transform = "translateX(0)";
    previousCard.style.transform = "translateX(80%)";

  }

  //right button
  if(nextCard.classList.contains("active")){
    button_next.style.display = "none";
  }

  if(!previousCard.classList.contains("active")){
    button_prev.style.display = "block";
  }


});


button_prev.addEventListener("click", () =>{

  //right card to center, center to left
  if(currentCard.classList.contains("active") && !previousCard.classList.contains("active")){

    currentCard.classList.remove("active");
    previousCard.classList.add("active");

    currentCard.style.transform = "translateX(30%)";
    currentCard.style.zIndex = "1";
    previousCard.style.transform = "translateX(100%)";
  }

  //back to normal
  if(!currentCard.classList.contains("active") && nextCard.classList.contains("active")){
    nextCard.classList.remove("active");
    currentCard.classList.add("active");

    currentCard.style.transform = "translateX(0)";
    nextCard.style.transform = "translateX(-80%)";

  }

  //left button
  if(previousCard.classList.contains("active")){
    button_prev.style.display = "none";
  }


  //right button
  if(!nextCard.classList.contains("active")){
    button_next.style.display = "block";
  }


});


//MODAL
let closeModal = document.querySelector(".close"),
    card_1 = document.querySelector(".current"),
    card_2 = document.querySelector(".next"),
    card_3 = document.querySelector(".previous"),
    modalWork = document.querySelector(".modal__container"),
    modal_content_1 = document.querySelector(".modal__card-1"),
    modal_content_2 = document.querySelector(".modal__card-2"),
    modal_content_3 = document.querySelector(".modal__card-3"),
    modal_portfolio = document.querySelector(".modal__container");

/* Portfolio - modal images */

const slider = gsap.utils.toArray(".slider img")

const workTL = gsap.timeline({
    defaults: {
        ease: 'power1.inOut',
        delay: 3,
        duration: 1,
        repeatDelay: 0.5,
        yoyo: true
    }
})

  
  closeModal.addEventListener("click", () =>{

   modal_portfolio.classList.add("out");

   setTimeout(function(){

     modalWork.style.display = "none";
     modal_content_1.style.display = "none";
     modal_content_2.style.display = "none";
     modal_content_3.style.display = "none";
     
   }, 1000)


});

card_1.addEventListener("click", () =>{

  if(card_1.classList.contains("active")){

    modal_portfolio.classList.remove("out");
    modalWork.style.display = "flex";
    modal_content_1.style.display = "block";  

    workTL
        .to(slider, {
          xPercent: -100,
        })
        .to(slider, {
          xPercent: -200,
        })
        .to(slider, {
          xPercent: -100,
        })
        .to(slider, {
          xPercent: 0,
        })
        .repeat(-1)
    
  }
});

card_2.addEventListener("click", () =>{


  if(card_2.classList.contains("active")){

    modal_portfolio.classList.remove("out");
    modalWork.style.display = "flex";
    modal_content_2.style.display = "block"; 
    
    workTL
        .to(slider, {
          xPercent: -100,
        })
        .to(slider, {
          xPercent: -200,
        })
        .to(slider, {
          xPercent: -100,
        })
        .to(slider, {
          xPercent: 0,
        })
        .repeat(-1)

  }
  

});

card_3.addEventListener("click", () =>{  
  
  if(card_3.classList.contains("active")){

    modal_portfolio.classList.remove("out");
    modalWork.style.display = "flex";
    modal_content_3.style.display = "block";   
    
    workTL
        .to(slider, {
          xPercent: -100,
        })
        .to(slider, {
          xPercent: -200,
        })
        .to(slider, {
          xPercent: -100,
        })
        .to(slider, {
          xPercent: 0,
        })
        .repeat(-1)

  }

});


//MOBILE SLIDER

/* let page = document.querySelector(".portfolio__wrapper-mobile");

page.addEventListener("scroll", () =>{
  
  let winScroll = document.body.scrollLeft || page.scrollLeft;
  let winWidth = page.scrollWidth - page.clientWidth;
  let scrolled = (winScroll / winWidth) * 100;
  
  document.getElementById("bar").style.width = scrolled + "%";

}); */





