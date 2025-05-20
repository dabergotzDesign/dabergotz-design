 const r_title = new rive.Rive({
  src: "./rive/ddesign_title.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  artboard: "Innovating",
  stateMachines: "State Machine 1",
  onLoad: () => {
    r_title.resizeDrawingSurfaceToCanvas();
  },
});