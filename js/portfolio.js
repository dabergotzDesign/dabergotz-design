const triggers = document.getElementsByClassName('button__info');
const triggerArray = Array.from(triggers).entries();
const container = document.querySelector(".modal__container");
const modals = document.querySelectorAll('.prtfl__modal');
const closeButton = document.querySelector('.close');



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


