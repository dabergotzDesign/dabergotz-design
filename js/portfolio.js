
/* LOTTIE */

/* // Portfolio 01 // */
const p1 = document.querySelector(".p_canvas-1"),
p2 = document.querySelector(".p_canvas-2"),
p3 = document.querySelector(".p_canvas-3"),
p4 = document.querySelector(".p_canvas-4"),
lottie_p1 = document.getElementById("lottie_p1"),
lottie_p2 = document.getElementById("lottie_p2"),
lottie_p3 = document.getElementById("lottie_p3"),
lottie_p4 = document.getElementById("lottie_p4");

p1.addEventListener("mouseenter", () => {
  lottie_p1.play();
});

p1.addEventListener("mouseleave", () => {
  lottie_p1.stop();
});

p2.addEventListener("mouseenter", () => {
  lottie_p2.play();
});

p2.addEventListener("mouseleave", () => {
  lottie_p2.stop();
});

p3.addEventListener("mouseenter", () => {
  lottie_p3.play();
});

p3.addEventListener("mouseleave", () => {
  lottie_p3.stop();
});

p4.addEventListener("mouseenter", () => {
  lottie_p4.play();
});

p4.addEventListener("mouseleave", () => {
  lottie_p4.stop();
});


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

