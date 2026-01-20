
/* MODAL */
const container = document.querySelector(".modal__container");
const modals = document.querySelectorAll('.prtfl__modal');
const closeButton = document.querySelector('.close');


/* GALLERY */
/* const g_next = document.querySelector(".gallery__controls .next"),
      g_prev = document.querySelector(".gallery__controls .prev"),
      gallery = document.querySelector(".portfolio__gallery"); */

const r_gallery_1 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("canvas-1"),
        artboard: "RM - card",
        autoplay: true,
        stateMachines: "card hover",
        onLoad: () => {
          r_gallery_1.resizeDrawingSurfaceToCanvas();
        },
  });

const r_gallery_2 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("canvas-2"),
        artboard: "A - card",
        autoplay: true,
        stateMachines: "card hover",
        onLoad: () => {
          r_gallery_2.resizeDrawingSurfaceToCanvas();
        },
});

const r_gallery_3 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("canvas-3"),
        artboard: "GDY - card",
        autoplay: true,
        stateMachines: "card hover",
        onLoad: () => {
          r_gallery_3.resizeDrawingSurfaceToCanvas();
        },
});

const r_gallery_4 = new rive.Rive({
        src: "../rive/portfolio_cards.riv",
        canvas: document.getElementById("canvas-4"),
        artboard: "DRD - card",
        autoplay: true,
        stateMachines: "card hover",
        onLoad: () => {
          r_gallery_4.resizeDrawingSurfaceToCanvas();
        },
});

/* RIVE EVENTS */
function onRiveEvent(riveEvent){
  const eventData = riveEvent.data;
  if(eventData.name === "view"){
    window.open(eventData.url);
  }
  if(eventData.name === "explore"){
    window.open(eventData.url);
  }
}

r_gallery_1.on(rive.EventType.RiveEvent ,onRiveEvent);
r_gallery_2.on(rive.EventType.RiveEvent ,onRiveEvent);
r_gallery_3.on(rive.EventType.RiveEvent ,onRiveEvent);
r_gallery_4.on(rive.EventType.RiveEvent ,onRiveEvent);

