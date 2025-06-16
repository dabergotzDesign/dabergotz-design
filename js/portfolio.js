
/* LINKS */
const g_triggers = document.querySelectorAll(".g_info");
const g_triggerArr = Array.from(g_triggers).entries();


const triggers = document.getElementsByClassName('button__info');
const triggerArray = Array.from(triggers).entries();


/* MODAL */
const container = document.querySelector(".modal__container");
const modals = document.querySelectorAll('.prtfl__modal');
const closeButton = document.querySelector('.close');


/* GALLERY */
const g_next = document.querySelector(".gallery__controls .next"),
      g_prev = document.querySelector(".gallery__controls .prev"),
      gallery = document.querySelector(".portfolio__gallery");

const r_gallery_1 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("canvas-1"),
        artboard: "glass_card-tc",
        autoplay: true,
        stateMachines: "card_states",
        onLoad: () => {
          r_gallery_1.resizeDrawingSurfaceToCanvas();
        },
  });

const r_gallery_2 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("canvas-2"),
        artboard: "glass_card-rs",
        autoplay: true,
        stateMachines: "card_states",
        onLoad: () => {
          r_gallery_2.resizeDrawingSurfaceToCanvas();
        },
});

const r_gallery_3 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("canvas-3"),
        artboard: "glass_card-a",
        autoplay: true,
        stateMachines: "card_states",
        onLoad: () => {
          r_gallery_3.resizeDrawingSurfaceToCanvas();
        },
});

const r_gallery_4 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("canvas-4"),
        artboard: "glass_card-gdy",
        autoplay: true,
        stateMachines: "card_states",
        onLoad: () => {
          r_gallery_4.resizeDrawingSurfaceToCanvas();
        },
});



/* Gallery controls, scroll */
g_next.addEventListener("click", ()=>{

  let scrollAmount = 0;

  let slideTimer = setInterval(function(){
    gallery.scrollLeft += 20;
    scrollAmount += 5;
    if(scrollAmount >= 100){
      window.clearInterval(slideTimer)
    }
  }, 25);


});

g_prev.addEventListener("click", ()=>{

  let scrollAmount = 0;

  let slideTimer = setInterval(function(){
    gallery.scrollLeft -= 20;
    scrollAmount += 5;
    if(scrollAmount >= 100){
      window.clearInterval(slideTimer)
    }
  }, 25);


});


/* MODAL*/
for (let [index, g_trigger] of g_triggerArr) {
  const toggleModal = () => {
    modals[index].classList.toggle('active-content');
    container.classList.toggle("active");


    if(modals[0].classList.contains('active-content')){

      const r_portfolio_1 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("p_canvas-1"),
        artboard: "TC_cards",
        autoplay: true,
        stateMachines: "cards_fan",
        onLoad: () => {
          r_portfolio_1.resizeDrawingSurfaceToCanvas();
        },
      });
      
    }

    if(modals[1].classList.contains('active-content')){

      const r_portfolio_2 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("p_canvas-2"),
        artboard: "RS_cards",
        autoplay: true,
        stateMachines: "cards_fan",
        onLoad: () => {
          r_portfolio_2.resizeDrawingSurfaceToCanvas();
        },
      });
      
    }

    if(modals[2].classList.contains('active-content')){

      const r_portfolio_3 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("p_canvas-3"),
        artboard: "A_cards",
        autoplay: true,
        stateMachines: "carousel_ani",
        onLoad: () => {
          r_portfolio_3.resizeDrawingSurfaceToCanvas();
        },
      });
      
    }

    if(modals[3].classList.contains('active-content')){

      const r_portfolio_4 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("p_canvas-4"),
        artboard: "GDY_cards",
        autoplay: true,
        stateMachines: "cards_fan",
        onLoad: () => {
          r_portfolio_4.resizeDrawingSurfaceToCanvas();
        },
      });
      
    }

  }
  g_trigger.addEventListener("click", toggleModal);
  
  closeButton.addEventListener("click", ()=>{
      container.classList.remove("active");
      if(modals[index].classList.contains("active-content")){
        modals[index].classList.remove("active-content");
      }
  });

  container.addEventListener("click", e => {
    if (e.target == container) {
      container.classList.remove("active");
      if(modals[index].classList.contains("active-content")){
        modals[index].classList.remove("active-content");
      }
    }
  })


}





for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    modals[index].classList.toggle('active-content');
    container.classList.toggle("active");


    if(modals[0].classList.contains('active-content')){

      const r_portfolio_1 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("p_canvas-1"),
        artboard: "TC_cards",
        autoplay: true,
        stateMachines: "cards_fan",
        onLoad: () => {
          r_portfolio_1.resizeDrawingSurfaceToCanvas();
        },
      });
      
    }

    if(modals[1].classList.contains('active-content')){

      const r_portfolio_2 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("p_canvas-2"),
        artboard: "RS_cards",
        autoplay: true,
        stateMachines: "cards_fan",
        onLoad: () => {
          r_portfolio_2.resizeDrawingSurfaceToCanvas();
        },
      });
      
    }

    if(modals[2].classList.contains('active-content')){

      const r_portfolio_3 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("p_canvas-3"),
        artboard: "A_cards",
        autoplay: true,
        stateMachines: "carousel_ani",
        onLoad: () => {
          r_portfolio_3.resizeDrawingSurfaceToCanvas();
        },
      });
      
    }

    if(modals[3].classList.contains('active-content')){

      const r_portfolio_4 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("p_canvas-4"),
        artboard: "VM_cards",
        autoplay: true,
        stateMachines: "carousel_ani",
        onLoad: () => {
          r_portfolio_4.resizeDrawingSurfaceToCanvas();
        },
      });
      
    }

  }
  trigger.addEventListener("click", toggleModal);
  
  closeButton.addEventListener("click", ()=>{
      container.classList.remove("active");
      if(modals[index].classList.contains("active-content")){
        modals[index].classList.remove("active-content");
      }
  });

  container.addEventListener("click", e => {
    if (e.target == container) {
      container.classList.remove("active");
      if(modals[index].classList.contains("active-content")){
        modals[index].classList.remove("active-content");
      }
    }
  })


}


