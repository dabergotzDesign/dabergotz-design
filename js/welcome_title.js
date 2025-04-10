
const mobileMedia = window.matchMedia('(max-width: 450px)');

if(mobileMedia.matches){
  const r_title = new rive.Rive({
    src: "./rive/ddesign_title.riv",
    // OR the path to a discoverable and public Rive asset
    // src: '/public/example.riv',
    canvas: document.getElementById("canvas"),
    autoplay: true,
    artboard: "welcome mobile",
    stateMachines: "State Machine 1",
    onLoad: () => {
      r_title.resizeDrawingSurfaceToCanvas();
    },
});
}else{
  const r_title = new rive.Rive({
    src: "./rive/ddesign_title.riv",
    // OR the path to a discoverable and public Rive asset
    // src: '/public/example.riv',
    canvas: document.getElementById("canvas"),
    autoplay: true,
    artboard: "Artboard",
    stateMachines: "State Machine 1",
    onLoad: () => {
      r_title.resizeDrawingSurfaceToCanvas();
    },
});
}

