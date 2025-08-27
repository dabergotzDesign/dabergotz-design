 const r_title = new rive.Rive({
  src: "./rive/ddesign_title.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  artboard: "Innovating 5.0",
  stateMachines: "reveal state",
  onLoad: () => {
    r_title.resizeDrawingSurfaceToCanvas();
  },
});